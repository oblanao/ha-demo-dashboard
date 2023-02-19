import React from "react";
import { useHass } from "../../hooks";
import "./Camera.css";

const Camera = ({ entity_id }) => {
  // @see: http://192.168.68.67:1984 (go2rtc)
  const { hass } = useHass();
  const { states } = hass;
  const image = states[`camera.${entity_id}`].attributes.entity_picture;

  return <img className="camera-image" src={image} />;
};

export default Camera;
