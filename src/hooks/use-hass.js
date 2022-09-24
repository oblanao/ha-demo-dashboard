import { useContext } from "react";
import { HassContext } from "../context";

const useHass = () => {
  // TODO: here is the place to create event listeners
  // i.e. : onStateChange will be implemented using useEffect with states dependency;
  const hass = useContext(HassContext);

  return { hass };
};

export default useHass;
