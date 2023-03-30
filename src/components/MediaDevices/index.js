import React from "react";
import { useHass } from "../../hooks";
import "./MediaDevices.css";
import { DashboardCard, UnavailableBadge } from "../ui-elements";
import mediaDevices from "../../resources/icons/media-devices.png";
import WithActionSheet from "../ui-elements/ActionSheet/WithActionSheet";
const MediaDevices = () => {
  const { hass } = useHass();
  const { states } = hass;
  const entityIds = [
    // "media_player.bedroom_fire_tv",
    "media_player.living_room_chromecast_2",
    "media_player.bedroom_tv",
    "media_player.living_room_tv",
  ];

  const entities = entityIds.map((entityId) => states[entityId]);

  const entitiesOn = entities.filter((entity) => entity?.state !== "off");
  const entitiesUnavailable = entities.filter(
    (entity) => entity?.state === "unavailable"
  );

  const turnAllDevicesOff = () =>
    hass.callService("homeassistant", "turn_off", {
      entity_id: "media_player.all_media_players",
    });

  return (
    <WithActionSheet
      options={{
        title: "Media Devices",
        subtitle: entitiesOn.length
          ? `There are ${entitiesOn.length} media devices on.`
          : `All  media devices are off`,
        actions: entitiesOn.length
          ? [
              {
                caption: "Turn all off",
                onClick: turnAllDevicesOff,
                isDestructive: false,
              },
            ]
          : [],
      }}
    >
      <DashboardCard variant={entitiesOn?.length && "media-on"}>
        <div className="flex-col-center media-devices">
          {!!entitiesUnavailable.length && <UnavailableBadge />}
          <img src={mediaDevices} />
          <h3>Media Devices</h3>
          <p>{entitiesOn.length ? `${entitiesOn.length} on` : `All off`}</p>
        </div>
      </DashboardCard>
    </WithActionSheet>
  );
};

export default MediaDevices;
