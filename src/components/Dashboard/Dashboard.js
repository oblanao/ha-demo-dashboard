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

// alternative way
// import withHass from "../../hoc/with-hass";

// main way
import { useHass } from "../../hooks";

// css needs to be imported like this, in all components
import "./Dashboard.css";

const Dashboard = () => {
  // main way
  const { hass } = useHass();

  return (
    <div>
      {/* Check that hass is working */}
      <pre>{JSON.stringify(Object.keys(hass), null, 3)}</pre>
    </div>
  );
};

export default Dashboard;
// alternative way
// export default withHass(Dashboard);
