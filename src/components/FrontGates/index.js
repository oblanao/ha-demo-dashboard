import React from "react";
import { useHass } from "../../hooks";
import { faDoorClosed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./FrontGates.css";

const FrontGates = () => {
  const { hass } = useHass();
  const { states } = hass;
  const data = states["binary_sensor.front_gates_sensor_contact"];

  const toggleGates = () =>
    hass.callService("switch", "turn_on", {
      entity_id: "switch.front_gates",
    });

  return (
    <div className="front-gates">
      <FontAwesomeIcon icon={faDoorClosed} size="3x" />
      <p>Front Gates</p>
      <p>{data.state === "off" ? "Closed" : "Open"}</p>

      <button onClick={toggleGates}>
        {data.state === "off" ? "Open" : "Close"} Gates
      </button>
    </div>
  );
};

export default FrontGates;
