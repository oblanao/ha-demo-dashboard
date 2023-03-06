import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./UnavailableBadge.css";

const UnavailableBadge = ({ count }) => {
  return (
    <div className="unavailable-badge">
      {<FontAwesomeIcon icon={faExclamationTriangle} />}
    </div>
  );
};

export default UnavailableBadge;
