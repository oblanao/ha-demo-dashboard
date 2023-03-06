import React from "react";
import { useHass } from "../../hooks";
import { DashboardCard, UnavailableBadge } from "../ui-elements";
import "./WaterLeaks.css";
import waterLeak from "../../resources/icons/water-leak.png";

const WaterLeaks = () => {
  const { hass } = useHass();
  const { states } = hass;
  const entityIds = [
    "binary_sensor.kitchen_water_leak_sensor_water_leak",
    "binary_sensor.main_bathroom_water_leak_sensor_water_leak",
    "binary_sensor.second_bathroom_water_leak_sensor_water_leak",
  ];

  const entities = entityIds.map((entityId) => states[entityId]);

  const entitiesOn = entities.filter((entity) => entity?.state === "on");
  const entitiesUnavailable = entities.filter(
    (entity) => entity?.state === "unavailable"
  );

  return (
    <DashboardCard variant={entitiesOn?.length && "warning"}>
      <div className="flex-col-center water-leaks">
        {!!entitiesUnavailable.length && (
          <UnavailableBadge count={entitiesUnavailable.length} />
        )}
        <img src={waterLeak} />
        <h3>Leaks</h3>
        <p>{entitiesOn.length ? `WARNING` : `Clear`}</p>
      </div>
    </DashboardCard>
  );
};

export default WaterLeaks;
