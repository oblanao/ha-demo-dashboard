import React from "react";
import { Person } from "../";
import config from "../../config";
import { DashboardCard } from "../ui-elements";

import "./HomePresence.css";

const HomePresence = () => {
  const { persons } = config;

  return (
    <DashboardCard>
      <div className="persons-container">
        {persons.map((person) => (
          <Person key={person?.name} {...person} />
        ))}
      </div>
    </DashboardCard>
  );
};

export default HomePresence;
