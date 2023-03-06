import React from "react";
import { useHass } from "../../hooks";
import { DashboardCard, UnavailableBadge } from "../ui-elements";
import "./FrontLock.css";
import lockClosed from "../../resources/icons/lock_closed.png";
import lockOpen from "../../resources/icons/lock_open.png";

const FrontLock = () => {
  const { hass } = useHass();
  const { states } = hass;
  const data = states["lock.front_lock_lock"];

  // const lockDoor = () =>
  //   hass.callService("lock", "lock", {
  //     entity_id: "lock.front_lock_lock",
  //   });

  // const openDoor = () =>
  //   hass.callService("lock", "open", {
  //     entity_id: "lock.front_lock_lock",
  //   });

  const isUnlocked = data.state === "unlocked";
  const isUnavailable = data.state === "unavailable";

  return (
    <DashboardCard variant={isUnlocked && "warning"}>
      <div className="front-lock flex-col-center">
        {isUnavailable && <UnavailableBadge />}
        <img src={isUnlocked ? lockOpen : lockClosed} />
        <h3>Front Lock</h3>
      </div>
    </DashboardCard>
  );
};

export default FrontLock;
