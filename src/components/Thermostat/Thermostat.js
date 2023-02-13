import React from "react";
import { useHass } from "../../hooks";
import "./Thermostat.css";

const Thermostat = () => {
  const { hass } = useHass();
  const { states } = hass;
  const data = states["climate.thermostat"];
  if (!data) {
    return null;
  }
  const { attributes } = data;
  const { current_temperature, temperature, selected_schedule, hvac_action } = attributes;

  return (
    <div className="thermostat">
      <h2>{current_temperature}</h2>
      <h3>{temperature}</h3>
      <h4>
        {selected_schedule} <em>({hvac_action})</em>
      </h4>
    </div>
  );
};

export default Thermostat;
