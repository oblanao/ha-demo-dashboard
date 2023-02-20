import { format } from "date-fns";
import React from "react";
import { useHass } from "../../hooks";
import { DashboardCard } from "../ui-elements";
import "./HelloMessage.css";
import smartHome from "../../resources/icons/smart-home.png";

const HelloMessage = () => {
  const { hass } = useHass();
  const { user } = hass;
  const { name } = user;

  return (
    <DashboardCard>
      <div className="hello-message">
        <div className="icon flex-col-center">
          <img src={smartHome} />
        </div>
        <div className="text">
          <h3>Hello, {name}!</h3>
          <h4>{format(new Date(), "eeee, MMMM dd")}</h4>
        </div>
      </div>
    </DashboardCard>
  );
};

export default HelloMessage;
