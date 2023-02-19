import { faWater } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHass } from "../../hooks";
import { DashboardCard } from "../ui-elements";
import "./WaterLeaks.css";

const WaterLeaks = () => {
  const { hass } = useHass();
  const { states } = hass;
  const entityIds = [
    "binary_sensor.kitchen_water_leak_sensor_water_leak",
    "binary_sensor.main_bathroom_water_leak_sensor_water_leak",
    "binary_sensor.second_bathroom_water_leak_sensor_water_leak",
  ];

  const entities = entityIds.map((entityId) => states[entityId]);

  const entitiesOn = entities.filter((entity) => entity?.state === "on");

  return (
    <DashboardCard variant={entitiesOn?.length && "warning"}>
      <div className="">
        <FontAwesomeIcon icon={faWater} size="3x" />
        <p>Water Leaks</p>
        <p>{entitiesOn.length ? `WARNING` : `Clear`}</p>
      </div>
    </DashboardCard>
  );
};

export default WaterLeaks;
