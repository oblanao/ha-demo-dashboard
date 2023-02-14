import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHass } from "../../hooks";
import "./FrontLock.css";

const FrontLock = () => {
  const { hass } = useHass();
  const { states } = hass;
  const data = states["lock.front_lock_lock"];

  return (
    <div className="front-lock">
      <FontAwesomeIcon icon={faLock} size="3x" />
      <p>Front Lock</p>
      <p>{data.state}</p>
    </div>
  );
};

export default FrontLock;
