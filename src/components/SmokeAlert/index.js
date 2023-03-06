import React from "react";
import { useHass } from "../../hooks";
import { DashboardCard, UnavailableBadge } from "../ui-elements";
import "./SmokeAlert.css";
import smoke from "../../resources/icons/smoke.png";

const SmokeAlert = () => {
  const { hass } = useHass();
  const { states } = hass;
  const entityIds = ["binary_sensor.kitchen_smoke_sensor_smoke"];

  const entities = entityIds.map((entityId) => states[entityId]);

  const entitiesOn = entities.filter((entity) => entity?.state === "on");
  const entitiesUnavailable = entities.filter(
    (entity) => entity?.state === "unavailable"
  );

  return (
    <DashboardCard variant={entitiesOn?.length && "warning"}>
      <div className="flex-col-center smoke-alert">
        <img src={smoke} />
        {!!entitiesUnavailable.length && (
          <UnavailableBadge count={entitiesUnavailable.length} />
        )}
        <h3>Smoke</h3>
        <p>{entitiesOn.length ? `WARNING` : `Clear`}</p>
      </div>
    </DashboardCard>
  );
};

export default SmokeAlert;
