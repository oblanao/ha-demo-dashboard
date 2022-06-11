import React, { useContext } from "react";
import HassContext from "../context/HassContext";

const withHass = (WrapperComponent) => (props) => {
  const hass = useContext(HassContext);
  return <WrapperComponent hass={hass} {...props} />;
};

export default withHass;
