const DEFAULT_EVENING_TIME = 18;

const isDaytime = () => {
  const date = new Date();
  const hour = date.getHours(); // 3 PM is 15

  return hour < DEFAULT_EVENING_TIME;
};

export default isDaytime;
