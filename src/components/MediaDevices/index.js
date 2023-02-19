import { faPodcast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHass } from "../../hooks";
import "./MediaDevices.css";
import { DashboardCard } from "../ui-elements";

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

  const turnAllDevicesOff = () =>
    hass.callService("homeassistant", "turn_off", {
      entity_id: "media_player.all_media_players",
    });

  return (
    <DashboardCard variant={entitiesOn?.length && "media-on"}>
      <div className="">
        <FontAwesomeIcon icon={faPodcast} size="3x" />
        <p>Media Devices</p>
        <p>{entitiesOn.length ? `${entitiesOn.length} on` : `Clear`}</p>
        {/* {!!entitiesOn.length && (
          <button onClick={() => turnAllDevicesOff()}>Turn all off</button>
        )} */}
      </div>
    </DashboardCard>
  );
};

export default MediaDevices;
