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
  const {
    current_temperature,
    temperature: target_temperature,
    selected_schedule,
    hvac_action,
  } = attributes;

  const setSchedule = (schedule_name) => {
    hass.callService("netatmo", "set_schedule", {
      entity_id: "climate.thermostat",
      schedule_name,
    });
  };

  return (
    <div className="thermostat">
      <h2>{current_temperature}</h2>
      <h3>{target_temperature}</h3>
      <h4>
        {selected_schedule} <em>({hvac_action})</em>
      </h4>
      <div className="thermostat-buttons">
        {selected_schedule === "Always ON" && (
          <button onClick={() => setSchedule("Away")}>Set to Away</button>
        )}
        {selected_schedule === "Away" && (
          <button onClick={() => setSchedule("Always ON")}>
            Set to Always ON
          </button>
        )}
      </div>
    </div>
  );
};

export default Thermostat;
