// import { faLock } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHass } from "../../hooks";
import { DashboardCard } from "../ui-elements";
import "./FrontLock.css";
import lockClosed from "../../resources/icons/lock_closed.png";
import lockOpen from "../../resources/icons/lock_open.png";

const FrontLock = () => {
  const { hass } = useHass();
  const { states } = hass;
  const data = states["lock.front_lock_lock"];

  // const lockDoor = () =>
  //   hass.callService("lock", "lock", {
  //     entity_id: "lock.front_lock_lock",
  //   });

  // const openDoor = () =>
  //   hass.callService("lock", "open", {
  //     entity_id: "lock.front_lock_lock",
  //   });

  const isUnlocked = data.state === "unlocked";

  return (
    <DashboardCard variant="success">
      <div className="front-lock">
        <img src={isUnlocked ? lockOpen : lockClosed} />
        {/* <FontAwesomeIcon icon={faLock} size="3x" /> */}
        <h3>Front Lock</h3>
        {/* <p>{data.state}</p>
        {data.state === "unlocked" && (
          <button onClick={() => lockDoor()}>Lock</button>
        )}
        {data.state === "locked" && (
          <button onClick={() => openDoor()}>Unlock</button>
        )} */}
      </div>
    </DashboardCard>
  );
};

export default FrontLock;
