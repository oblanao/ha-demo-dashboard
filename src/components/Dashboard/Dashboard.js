/**
 * ********************* *
 * DEMO COMPONENT
 * ********************* *
 *
 * ********************* *
 * INTERACTING WITH HASS *
 * ********************* *
 * Two alternative ways of interacting with hass
 * 1. main way - by using custom useHass hook.
 * 2. alternative way - by using withHass HOC. All components will receive hass prop.
 */

// React needs to be imported like this, in all components
import React from "react";
import {
  Camera,
  FrontGates,
  FrontLock,
  HomePresence,
  IndoorMotion,
  OutdoorMotion,
  Thermostat,
  Weather,
} from "..";

// alternative way
// import withHass from "../../hoc/with-hass";

// main way
import { useHass } from "../../hooks";

// css needs to be imported like this, in all components
import "./Dashboard.css";

const Dashboard = () => {
  // main way
  const { hass } = useHass();
  console.log(hass);
  return (
    <div className="dashboard">
      <Weather />
      <HomePresence />
      <div className="grid-2-cols">
        <Thermostat />
      </div>
      <Camera entity_id="front_camera" />
      <div className="grid-2-cols">
        <FrontGates />
        <FrontLock />
      </div>
      <div className="grid-3-cols">
        <OutdoorMotion />
        <IndoorMotion />
      </div>
    </div>
  );
};

export default Dashboard;
// alternative way
// export default withHass(Dashboard);
