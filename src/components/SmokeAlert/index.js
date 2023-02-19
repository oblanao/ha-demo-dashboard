import { faSmog, faWater } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHass } from "../../hooks";
import { DashboardCard } from "../ui-elements";
import "./SmokeAlert.css";

const SmokeAlert = () => {
  const { hass } = useHass();
  const { states } = hass;
  const entityIds = ["binary_sensor.kitchen_smoke_sensor_smoke"];

  const entities = entityIds.map((entityId) => states[entityId]);

  const entitiesOn = entities.filter((entity) => entity?.state === "on");

  return (
    <DashboardCard variant={entitiesOn?.length && "warning"}>
      <div className="">
        <FontAwesomeIcon icon={faSmog} size="3x" />
        <p>Smoke Alerts</p>
        <p>{entitiesOn.length ? `WARNING` : `Clear`}</p>
      </div>
    </DashboardCard>
  );
};

export default SmokeAlert;
