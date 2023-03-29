import React, { useState } from "react";
import { useHass } from "../../hooks";
import ActionSheet from "../ui-elements/ActionSheet/ActionSheet";
import "./Camera.css";

const Camera = ({ entity_id }) => {
  // @see: http://192.168.68.67:1984 (go2rtc)
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => setOpen((open) => !open);

  const { hass } = useHass();
  const { states } = hass;
  const image = states[`camera.${entity_id}`].attributes.entity_picture;

  return (
    <>
      <div onClick={handleClick}>
        <img className="camera-image" src={image} />
      </div>
      <ActionSheet
        isOpen={isOpen}
        setOpen={setOpen}
        subtitle={"My subtitle comes here"}
        title={"My title"}
      />
    </>
  );
};

export default Camera;
