// React needs to be imported like this, in all components
import React from "react";

// main way
import { useHass } from "../../hooks";

// css needs to be imported like this, in all components
import "./Person.css";

const Person = ({ name, image, tracker }) => {
  const { hass } = useHass();
  const { states } = hass;
  const person = states[`device_tracker.${tracker}`];
  const { state: person_state } = person;
  const isHome = person_state === "home";

  return (
    <div className={`person ${!isHome ? "faded" : ""}`}>
      <img src={image} />
      <h3>{name}</h3>
      {/* <pre>{JSON.stringify(person, null, 3)}</pre> */}
    </div>
  );
};

export default Person;
