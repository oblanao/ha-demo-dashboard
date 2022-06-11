import React from "react";
import TV from "./TV";
import "./Dashboard.css";
import HassContext from "../context/HassContext";

const Dashboard = ({ hass }) => {
  const tv = hass.connection._ent.state["media_player.lg_webos_tv_uk6200pla"];

  return (
    <HassContext.Provider value={hass}>
      <div className="dashboard">
        <TV data={tv} />
      </div>
    </HassContext.Provider>
  );
};
export { HassContext };

export default Dashboard;
