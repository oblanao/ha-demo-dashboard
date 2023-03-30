import React from "react";
import { useHass } from "../../hooks";
import "./LightsOn.css";
import { DashboardCard, UnavailableBadge } from "../ui-elements";
import lightBulb from "../../resources/icons/lightbulb.png";
import WithActionSheet from "../ui-elements/ActionSheet/WithActionSheet";

const LightsOn = () => {
  const { hass } = useHass();
  const { states } = hass;
  const entityIds = [
    "light.back_terrace_lights",
    "light.bedroom_lights",
    "light.dining_room_lights",
    "light.exterior_side_walls",
    "light.front_porch_lights",
    "light.hallway_lights",
    "light.kitchen_lights",
    "light.kitchen_porch_lights",
    "light.living_room_lights",
    "light.main_bathroom_lights",
    // "light.nanoleaf_canvas",
    "light.second_bathroom_lights",
    "light.office_lights",
    "light.utility_room_lights",
  ];

  const entities = entityIds.map((entityId) => states[entityId]);

  const entitiesOn = entities.filter((entity) => entity?.state === "on");
  const entitiesUnavailable = entities.filter(
    (entity) => entity?.state === "unavailable"
  );

  const turnAllLightsOff = () =>
    hass.callService("light", "turn_off", {
      entity_id: "light.all_lights",
    });

  return (
    <WithActionSheet
      options={{
        title: "Lights",
        subtitle: entitiesOn.length
          ? `There are ${entitiesOn.length} lights on.`
          : `All lights are off`,
        actions: [
          entitiesOn.length && {
            caption: "Lights off",
            onClick: turnAllLightsOff,
            isDestructive: false,
          },
        ],
      }}
    >
      <DashboardCard variant={entitiesOn?.length && "lights-on"}>
        <div className="flex-col-center">
          {!!entitiesUnavailable.length && (
            <UnavailableBadge count={entitiesUnavailable.length} />
          )}
          <img src={lightBulb} />
          <h3>Lights</h3>
          <p>{!!entitiesOn.length ? `${entitiesOn.length} on` : `All off`}</p>
        </div>
      </DashboardCard>
    </WithActionSheet>
  );
};

export default LightsOn;
