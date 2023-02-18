import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHass } from "../../hooks";
import "./LightsOn.css";

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
    "light.nanoleaf_canvas",
    "light.second_bathroom_lights",
    "light.office_lights",
    "light.utility_room_lights",
  ];

  const entities = entityIds.map((entityId) => states[entityId]);

  const entitiesOn = entities.filter((entity) => entity.state === "on");

  const turnAllLightsOff = () =>
    hass.callService("light", "turn_off", {
      entity_id: "light.all_lights",
    });
    console.log('got new hass')
  return (
    <div className="">
      <FontAwesomeIcon icon={faLightbulb} size="3x" />
      <p>Lights</p>
      <p>
        {!!entitiesOn.length
          ? `${entitiesOn.length} lights on`
          : `All lights off`}
        {!!entitiesOn.length && (
          <button onClick={() => turnAllLightsOff()}>Turn all off</button>
        )}
      </p>
    </div>
  );
};

export default LightsOn;
