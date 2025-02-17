import { faCloudRain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import getWeatherData from "../../functions/weather/get-weather-data";
import { useHass } from "../../hooks";
import { DashboardCard } from "../ui-elements";
import "./Weather.css";

const Weather = () => {
  const { hass } = useHass();
  const { states } = hass;

  const data = states["weather.snagov_home"];
  if (!data) {
    return null;
  }
  const { attributes } = data;
  
  const {
    forecast,
    friendly_name,
    precipitation_unit,
    temperature,
    temperature_unit,
  } = attributes;
  
  const precipitationLevel = forecast[0].precipitation;
  const { state: weather_state } = data;
  const stateData = getWeatherData(weather_state);
  const { icon, readable_state } = stateData;

  return (
    <DashboardCard>
      <div className="weather">
        <div className="weather-left">
          <div className="weather-icon">
            <img src={icon} />
          </div>
          <div className="weather-text">
            <h2>{readable_state}</h2>
            <h3>{friendly_name}</h3>
          </div>
        </div>
        <div className="weather-right">
          <h4 className="temperature">
            {temperature}
            <span className="unit">{temperature_unit}</span>
          </h4>
          <h5 className="precipitation">
            <FontAwesomeIcon icon={faCloudRain} />
            {/* TODO: check if precipitation key exists in hass.states["weather.snagov_home"].attributes */}
            {precipitationLevel || "0"}
            <span className="unit"> {precipitation_unit}</span>
          </h5>
        </div>
      </div>
    </DashboardCard>
  );
};

export default Weather;
