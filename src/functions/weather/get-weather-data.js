import { isDaytime } from "../";
import data from "../../data/weather_forecast.json";

const getWeatherData = (weather_state) => {
  const isSunny = weather_state === "sunny";
  let info = data[weather_state];
  if (isSunny) {
    info = data["clearsky"];
  }
  if (!info) {
    return {};
  }

  const { desc_en: readable_state, variants } = info;

  let icon_name = weather_state;
  if (weather_state === "sunny") {
    icon_name = "clearsky";
  }
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
