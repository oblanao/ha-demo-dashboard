import React from "react";
import { getIntegerAndDecimal } from "../../functions";
import "./ThermostatRadial.css";

const ThermostatRadial = ({ current_temperature, hvac_action }) => {
  const { integer, decimal } = getIntegerAndDecimal(current_temperature);
  const isHeating = hvac_action === "heat";

  return (
    <div className="thermostat-radial-container">
      <div className="de">
        <div className={`den ${!isHeating ? "den-heating" : "den-idle"}`}>
          <div className="dene">
            <div className="denem">
              <div className="deneme">
                {integer}
                <span>.{decimal}</span>
                <strong>&deg;</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThermostatRadial;
