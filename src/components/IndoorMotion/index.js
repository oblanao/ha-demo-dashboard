import React from "react";
import { useHass } from "../../hooks";
import { DashboardCard } from "../ui-elements";
import "./IndoorMotion.css";
import motionSensor from "../../resources/icons/motion-sensor.png";

const IndoorMotion = () => {
  const { hass } = useHass();
  const { states } = hass;
  const entityIds = [
    "binary_sensor.hue_motion_sensor_1_motion_2",
    "binary_sensor.hue_motion_sensor_1_motion_3",
  ];

  const entities = entityIds.map((entityId) => states[entityId]);

  const entitiesOn = entities.filter((entity) => entity?.state === "on");

  return (
    <DashboardCard variant={entitiesOn?.length && "warning"}>
      <div className="flex-col-center indoor-motion">
        <img src={motionSensor} />
        <h3>Indoors</h3>
        <p>{entitiesOn.length ? `Detected` : `Clear`}</p>
      </div>
    </DashboardCard>
  );
};

export default IndoorMotion;
