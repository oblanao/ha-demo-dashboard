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
  AccessDoors,
  Appliances,
  Camera,
  FrontGates,
  FrontLock,
  HelloMessage,
  HomePresence,
  IndoorMotion,
  LightsOn,
  MediaDevices,
  OutdoorMotion,
  SmokeAlert,
  Thermostat,
  WaterLeaks,
  Weather,
} from "..";

// alternative way
// import withHass from "../../hoc/with-hass";

// main way
import { useHass } from "../../hooks";
import Modal from "../ui-elements/Modal/Modal";

// css needs to be imported like this, in all components
import "./Dashboard.css";

const Dashboard = () => {
  // main way
  const { hass } = useHass();
  // console.log(hass);
  const testApi = async () => {
    const res = await hass.callApi(
      "get",
      "history/period/2023-02-20T00:00:00+02:00?filter_entity_id=binary_sensor.hue_motion_sensor_1_motion_2"
    );
    console.log(res);
  };

  // testApi();
  return (
    <div className="dashboard gap-2">
      {/* <Modal show={true} /> */}
      <HelloMessage />
      <Weather />
      <HomePresence />
      <div className="">
        <Thermostat />
      </div>
      <Camera entity_id="front_camera" />
      <div className="grid-2-cols gap-2">
        <FrontGates />
        <FrontLock />
      </div>
      <div className="grid-3-cols gap-2">
        <OutdoorMotion />
        <AccessDoors />
        <IndoorMotion />
      </div>
      <div className="grid-3-cols gap-2">
        <WaterLeaks />
        <LightsOn />
        <SmokeAlert />
      </div>
      <div className="grid-2-cols gap-2">
        <MediaDevices />
        <Appliances />
      </div>
    </div>
  );
};

export default Dashboard;
// alternative way
// export default withHass(Dashboard);
