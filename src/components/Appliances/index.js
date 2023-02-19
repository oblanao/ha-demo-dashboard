import React from "react";
import { useHass } from "../../hooks";
import { DashboardCard } from "../ui-elements";
import "./Appliances.css";
import plug from "../../resources/icons/plug.png";

const Appliances = () => {
  const { hass } = useHass();
  const { states } = hass;
  const devices = [
    {
      entity_id: "fan.air_purifier",
      turn_off_service: {
        domain: "fan",
        action: "turn_off",
      },
    },
    {
      entity_id: "switch.ps5_power",
      turn_off_service: {
        domain: "switch",
        action: "turn_off",
      },
    },
    {
      entity_id: "switch.kitchen_toaster_plug",
      turn_off_service: {
        domain: "switch",
        action: "turn_off",
      },
    },
    {
      entity_id: "vacuum.roborock_s6",
      turn_off_service: {
        domain: "vacuum",
        action: "turn_off",
      },
    },
    {
      entity_id: "humidifier.deerma_jsq2w_dbfc_humidifier",
      turn_off_service: {
        domain: "humidifier",
        action: "turn_off",
      },
    },
  ];

  const entities = devices.map(({ entity_id, turn_off_service }) => ({
    ...states[entity_id],
    entity_id,
    turn_off_service,
  }));

  const entitiesOn = entities.filter((entity) => entity?.state === "on");

  // const turnAllDevicesOff = () => {
  //   entitiesOn.map(({ entity_id, turn_off_service }) =>
  //     hass.callService(turn_off_service.domain, turn_off_service.action, {
  //       entity_id,
  //     })
  //   );
  // };

  return (
    <DashboardCard variant={entitiesOn?.length && "media-on"}>
      <div className="flex-col-center appliances">
        {/* <FontAwesomeIcon icon={faPlug} size="3x" /> */}
        <img src={plug} />
        <h3>Appliances</h3>
        <p>{entitiesOn.length ? `${entitiesOn.length} on` : `Clear`}</p>
        {/* {!!entitiesOn.length && (
          <button onClick={() => turnAllDevicesOff()}>Turn all off</button>
        )} */}
      </div>
    </DashboardCard>
  );
};

export default Appliances;
