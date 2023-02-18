import { isDaytime } from "../";
import data from "../../data/weather_forecast.json";

const getWeatherData = (weather_state) => {
  // const icon = `http://homeassistant.local:8123/local/resources/icons/weather-icons/${weather_state}.svg`;
  const info = data[weather_state];
  const { desc_en: readable_state, variants } = info;

  let icon_name = weather_state;
  if (variants) {
    if (isDaytime()) {
      icon_name += "_day";
    } else {
      icon_name += "_night";
    }
  }

  const icon = `/local/resources/icons/weather-icons/${icon_name}.svg`;

  return {
    icon,
    readable_state,
  };
};

export default getWeatherData;
