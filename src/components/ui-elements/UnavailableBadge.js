import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./UnavailableBadge.css";
import warningShield from "../../resources/icons/warning-shield.png";

const UnavailableBadge = () => {
  return (
    <div className="unavailable-badge">
      <img className="badge-icon" src={warningShield} />
      {/* {<FontAwesomeIcon icon={faExclamationTriangle} />} */}
    </div>
  );
};

export default UnavailableBadge;
