import React from "react";
import { useHass } from "../../hooks";
import "./Weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudRain } from "@fortawesome/free-solid-svg-icons";
import getWeatherData from "../../functions/weather/get-weather-data";

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
  const stateData = getWeatherData(weather_state);
  const { icon, readable_state } = stateData;

  return (
    <div className="weather">
      <div className="weather-left">
        <div>
          <img src={icon} />
        </div>
        <div>
          <h4>{readable_state}</h4>
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
