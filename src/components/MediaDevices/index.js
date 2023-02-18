import { faPodcast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHass } from "../../hooks";
import "./MediaDevices.css";

const MediaDevices = () => {
  const { hass } = useHass();
  const { states } = hass;
  const entityIds = [
    "media_player.bedroom_fire_tv",
    "switch.ps5_power",
    "media_player.living_room_chromecast_2",
    "media_player.bedroom_tv",
    "media_player.living_room_tv",
  ];

  const entities = entityIds.map((entityId) => states[entityId]);
  console.log({ entities });

  const entitiesOn = entities.filter((entity) => entity.state === "on");

  return (
    <div className="">
      <FontAwesomeIcon icon={faPodcast} size="3x" />
      <p>Media Devices</p>
      <p>{entitiesOn.length ? `${entitiesOn.length} on` : `Clear`}</p>
    </div>
  );
};

export default MediaDevices;
