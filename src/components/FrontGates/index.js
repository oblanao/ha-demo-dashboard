import React from "react";
import { useHass } from "../../hooks";
import gatesOpen from "../../resources/icons/gates_open.png";
import gatesClosed from "../../resources/icons/gates_closed.png";
import "./FrontGates.css";
import { DashboardCard, UnavailableBadge } from "../ui-elements";

const FrontGates = () => {
  const { hass } = useHass();
  const { states } = hass;
  const data = states["binary_sensor.front_gates_sensor_contact"];

  // const toggleGates = () =>
  //   hass.callService("switch", "turn_on", {
  //     entity_id: "switch.front_gates",
  //   });

  const isClosed = data.state === "off";
  const isUnavailable = data.state === "unavailable";

  return (
    <DashboardCard variant={!isClosed && "warning"}>
      <div className="front-gates flex-col-center">
        {isUnavailable && <UnavailableBadge />}
        <img src={isClosed ? gatesClosed : gatesOpen} />
        <h3>Front Gates</h3>
      </div>
    </DashboardCard>
  );
};

export default FrontGates;
