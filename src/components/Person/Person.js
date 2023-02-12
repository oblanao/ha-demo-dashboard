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

  return (
    <div className="person">
      {/* Check that hass is working */}
      <h3>{name}</h3>
      <img src={image} />
      <h5>{person_state === "home" ? "Home" : "Away"}</h5>
      {/* <pre>{JSON.stringify(person, null, 3)}</pre> */}
    </div>
  );
};

export default Person;
