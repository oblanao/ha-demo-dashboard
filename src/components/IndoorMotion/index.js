import { faHandSparkles } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHass } from "../../hooks";
import "./IndoorMotion.css";

const IndoorMotion = () => {
  const { hass } = useHass();
  const { states } = hass;
  const entityIds = [
    "binary_sensor.hue_motion_sensor_1_motion_2",
    "binary_sensor.hue_motion_sensor_1_motion_3",
  ];

  const entities = entityIds.map((entityId) => states[entityId]);

  const entitiesOn = entities.filter((entity) => entity.state === "on");

  return (
    <div className="">
      <FontAwesomeIcon icon={faHandSparkles} size="3x" />
      <p>Indoor Motion</p>
      <p>{entitiesOn.length ? `Detected` : `Clear`}</p>
    </div>
  );
};

export default IndoorMotion;
