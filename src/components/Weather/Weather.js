import React from "react";
import { useHass } from "../../hooks";
import "./Weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudRain } from "@fortawesome/free-solid-svg-icons";

const Weather = () => {
  const { hass } = useHass();
  const { states } = hass;
  const data = states["weather.snagov_home"];
  if (!data) {
    return;
  }

  const { attributes } = data;
  const {
    friendly_name,
    precipitation,
    precipitation_unit,
    temperature,
    temperature_unit,
  } = attributes;

  const { state: weather_state } = data;
  return (
    <div className="weather">
      <div className="weather-left">
        <div>
          <img src="https://via.placeholder.com/64x64.jpeg" />
        </div>
        <div>
          <h4>{weather_state}</h4>
          <h3>{friendly_name}</h3>
        </div>
      </div>
      <div className="weather-right">
        <h4>
          {temperature} {temperature_unit}
        </h4>
        <h5>
          <FontAwesomeIcon icon={faCloudRain} />
          {/* TODO: check if precipitation key exists in hass.states["weather.snagov_home"].attributes */}
          {precipitation || "0"} {precipitation_unit}
        </h5>
      </div>
    </div>
  );
};

export default Weather;
