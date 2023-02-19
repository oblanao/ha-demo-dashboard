import { faDoorClosed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHass } from "../../hooks";
import { DashboardCard } from "../ui-elements";
import "./AccessDoors.css";

const AccessDoors = () => {
  const { hass } = useHass();
  const { states } = hass;
  const entityIds = [
    "binary_sensor.kitchen_door_sensor_contact",
    "binary_sensor.living_room_door_sensor_contact",
  ];

  const entities = entityIds.map((entityId) => states[entityId]);

  const entitiesOn = entities.filter((entity) => entity?.state === "on");

  return (
    <DashboardCard variant={entitiesOn?.length && "warning"}>
      <div>
        <FontAwesomeIcon icon={faDoorClosed} size="3x" />
        <p>Access Doors</p>
        <p>{entitiesOn.length ? `WARNING` : `All closed`}</p>
      </div>
    </DashboardCard>
  );
};

export default AccessDoors;
