import React from "react";
import { useHass } from "../../hooks";
import "./HelloMessage.css";

const HelloMessage = () => {
  const { hass } = useHass();
  const { user } = hass;
  const { name } = user;

  return (
    <div className="hello-message">
      <h3>Hello, {name}!</h3>
      <h4></h4>
    </div>
  );
};

export default HelloMessage;
