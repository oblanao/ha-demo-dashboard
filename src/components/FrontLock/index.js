import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHass } from "../../hooks";
import "./FrontLock.css";

const FrontLock = () => {
  const { hass } = useHass();
  const { states } = hass;
  const data = states["lock.front_lock_lock"];

  const lockDoor = () =>
    hass.callService("lock", "lock", {
      entity_id: "lock.front_lock_lock",
    });

  const openDoor = () =>
    hass.callService("lock", "open", {
      entity_id: "lock.front_lock_lock",
    });

  return (
    <div className="front-lock">
      <FontAwesomeIcon icon={faLock} size="3x" />
      <p>Front Lock</p>
      <p>{data.state}</p>
      {data.state === "unlocked" && (
        <button onClick={() => lockDoor()}>Lock</button>
      )}
      {data.state === "locked" && (
        <button onClick={() => openDoor()}>Unlock</button>
      )}
    </div>
  );
};

export default FrontLock;
