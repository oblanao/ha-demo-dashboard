import React from "react";
import TV from "./TV";
import "./Dashboard.css";
import HassContext from "../context/HassContext";
import hassConfig from "../config/hass";

const Dashboard = ({ hass }) => {
  const tv = hass.connection._ent.state[hassConfig.entities["bedroom_tv"]];

  return (
    <HassContext.Provider value={hass}>
      <div className="dashboard">
        <TV data={tv} />
      </div>
    </HassContext.Provider>
  );
};

export default Dashboard;
