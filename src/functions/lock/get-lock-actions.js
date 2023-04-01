const lockDoor = (hass) =>
  hass.callService("lock", "lock", {
    entity_id: "lock.front_lock_lock",
  });

const openDoor = (hass) =>
  hass.callService("lock", "open", {
    entity_id: "lock.front_lock_lock",
  });

const getLockActions = (hass, isUnlocked) => {
  const openDoorAction = {
    caption: "Open Door",
    onClick: () => openDoor(hass),
    isDestructive: true,
  };
  const lockDoorAction = {
    caption: "Lock Door",
    onClick: () => lockDoor(hass),
    isDestructive: false,
  };

  const actions = [openDoorAction];

  if (isUnlocked) {
    actions.push(lockDoorAction);
  }

  return actions;
};

export default getLockActions;
