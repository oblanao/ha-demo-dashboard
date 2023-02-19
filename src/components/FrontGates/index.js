import React from "react";
import { useHass } from "../../hooks";
// import { faDoorClosed } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gatesOpen from "../../resources/icons/gates_open.png";
import gatesClosed from "../../resources/icons/gates_closed.png";
import "./FrontGates.css";
import { DashboardCard } from "../ui-elements";

const FrontGates = () => {
  const { hass } = useHass();
  const { states } = hass;
  const data = states["binary_sensor.front_gates_sensor_contact"];

  // const toggleGates = () =>
  //   hass.callService("switch", "turn_on", {
  //     entity_id: "switch.front_gates",
  //   });

  const isClosed = data.state === "off";

  return (
    <DashboardCard>
      <div className="front-gates">
        <img src={isClosed ? gatesClosed : gatesOpen} />
        {/* <FontAwesomeIcon icon={faDoorClosed} size="3x" /> */}
        <h3>Front Gates</h3>
        {/* <p>{isClosed ? "Closed" : "Open"}</p> */}

        {/* <button onClick={toggleGates}>
          {isClosed ? "Open" : "Close"} Gates
        </button> */}
      </div>
    </DashboardCard>
  );
};

export default FrontGates;
