import React from "react";
import { Person } from "../";
import config from "../../config";

import "./HomePresence.css";

const HomePresence = () => {
  const { persons } = config;

  return (
    <div className="persons-container">
      {persons.map((person) => (
        <Person key={person?.name} {...person} />
      ))}
    </div>
  );
};

export default HomePresence;
