import React from "react";
import { HassContext } from "../../context";
import Dashboard from "../Dashboard";
import mockHass from "../../data/examples/hass";

const App = ({ hass }) => {
  return (
    <HassContext.Provider value={mockHass}>
      {/* Rendering demo component */}
      <Dashboard />
    </HassContext.Provider>
  );
};

export default App;
