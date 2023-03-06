import React from "react";
import { useHass } from "../../hooks";
import { DashboardCard, UnavailableBadge } from "../ui-elements";
import "./OutdoorMotion.css";
import motionSensor from "../../resources/icons/motion-sensor.png";

const OutdoorMotion = () => {
  const { hass } = useHass();
  const { states } = hass;
  const entityIds = [
    "binary_sensor.hue_outdoor_motion_sensor_1_motion",
    "binary_sensor.hue_outdoor_motion_sensor_1_motion_3",
    "binary_sensor.hue_outdoor_motion_sensor_1_motion_2",
  ];

  const entities = entityIds.map((entityId) => states[entityId]);

  const entitiesOn = entities.filter((entity) => entity?.state === "on");
  const entitiesUnavailable = entities.filter(
    (entity) => entity?.state === "unavailable"
  );

  return (
    <DashboardCard variant={entitiesOn?.length && "warning"}>
      <div className="flex-col-center outdoor-motion">
        {!!entitiesUnavailable.length && (
          <UnavailableBadge count={entitiesUnavailable.length} />
        )}
        <img src={motionSensor} />
        <h3>Outdoors</h3>
        <p>
          {entitiesOn.length
            ? `${entitiesOn.length} sensors triggered`
            : `Clear`}
        </p>
      </div>
    </DashboardCard>
  );
};

export default OutdoorMotion;
