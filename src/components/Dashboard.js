import React from "react";
import TV from "./TV";
import "./Dashboard.css";

const Dashboard = ({ hass }) => {
  const tv = hass.connection._ent.state["media_player.lg_webos_tv_uk6200pla"];

  return (
    <div className="dashboard">
      <TV data={tv} hass={hass} />
    </div>
  );
};

export default Dashboard;
