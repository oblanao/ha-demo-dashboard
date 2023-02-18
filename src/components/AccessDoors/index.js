import { faDoorClosed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHass } from "../../hooks";
import "./AccessDoors.css";

const AccessDoors = () => {
  const { hass } = useHass();
  const { states } = hass;
  const entityIds = [
    "binary_sensor.kitchen_door_sensor_contact",
    "binary_sensor.living_room_door_sensor_contact",
  ];

  const entities = entityIds.map((entityId) => states[entityId]);
  console.log({ entities });

  const entitiesOn = entities.filter((entity) => entity.state === "on");

  return (
    <div className="">
      <FontAwesomeIcon icon={faDoorClosed} size="3x" />
      <p>Access Doors</p>
      <p>{entitiesOn.length ? `WARNING` : `All closed`}</p>
    </div>
  );
};

export default AccessDoors;
