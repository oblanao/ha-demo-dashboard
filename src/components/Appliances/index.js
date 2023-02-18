import { faPlug } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHass } from "../../hooks";
import "./Appliances.css";

const Appliances = () => {
  const { hass } = useHass();
  const { states } = hass;
  const entityIds = [
    "fan.air_purifier",
    "switch.kitchen_toaster_plug",
    "vacuum.roborock_s6",
    "humidifier.deerma_jsq2w_dbfc_humidifier",
  ];

  const entities = entityIds.map((entityId) => states[entityId]);
  console.log({ entities });

  const entitiesOn = entities.filter((entity) => entity.state === "on");

  return (
    <div className="">
      <FontAwesomeIcon icon={faPlug} size="3x" />
      <p>Appliances</p>
      <p>{entitiesOn.length ? `${entitiesOn.length} on` : `Clear`}</p>
    </div>
  );
};

export default Appliances;
