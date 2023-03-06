import React from "react";
import { useHass } from "../../hooks";
import { DashboardCard, UnavailableBadge } from "../ui-elements";
import "./AccessDoors.css";
import doorOpen from "../../resources/icons/door_open.png";
import doorClosed from "../../resources/icons/door_closed.png";

const AccessDoors = () => {
  const { hass } = useHass();
  const { states } = hass;
  const entityIds = [
    "binary_sensor.kitchen_door_sensor_contact",
    "binary_sensor.living_room_door_sensor_contact",
  ];

  const entities = entityIds.map((entityId) => states[entityId]);

  const entitiesOn = entities.filter((entity) => entity?.state === "on");
  const entitiesUnavailable = entities.filter(
    (entity) => entity?.state === "unavailable"
  );

  return (
    <DashboardCard variant={entitiesOn?.length && "warning"}>
      <div className="flex-col-center access-doors">
        {!!entitiesUnavailable.length && (
          <UnavailableBadge count={entitiesUnavailable.length} />
        )}
        <img src={entitiesOn?.length ? doorOpen : doorClosed} />
        <h3>Doors</h3>
        <p>{entitiesOn.length ? `Warning` : `All closed`}</p>
      </div>
    </DashboardCard>
  );
};

export default AccessDoors;
