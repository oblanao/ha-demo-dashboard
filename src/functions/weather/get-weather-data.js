import data from "../../data/weather_forecast.json";

const getWeatherData = (weather_state) => {
  const icon = `http://homeassistant.local:8123/local/resources/icons/weather-icons/${weather_state}.svg`;
  const readable_state = data[weather_state]?.desc_en;

  return {
    icon,
    readable_state,
  };
};

export default getWeatherData;
