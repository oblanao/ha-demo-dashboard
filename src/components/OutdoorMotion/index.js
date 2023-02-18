import { faHandSparkles } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHass } from "../../hooks";
import "./OutdoorMotion.css";

const OutdoorMotion = () => {
  const { hass } = useHass();
  const { states } = hass;
  const entityIds = [
    "binary_sensor.hue_outdoor_motion_sensor_1_motion",
    "binary_sensor.hue_outdoor_motion_sensor_1_motion_3",
    "binary_sensor.hue_outdoor_motion_sensor_1_motion_2",
  ];

  const entities = entityIds.map((entityId) => states[entityId]);

  const entitiesOn = entities.filter((entity) => entity.state === "on");

  return (
    <div className="">
      <FontAwesomeIcon icon={faHandSparkles} size="3x" />
      <p>Outdoor Motion</p>
      <p>
        {entitiesOn.length ? `${entitiesOn.length} sensors triggered` : `Clear`}
      </p>
    </div>
  );
};

export default OutdoorMotion;
