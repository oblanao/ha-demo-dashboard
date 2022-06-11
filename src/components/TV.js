import React from "react";
import * as tv from "../functions/tv";
import "./TV.css";
import tvChannels from "../data/tv-channels";
import tvSources from "../data/tv-sources";

const TV = ({ data, hass }) => {
  const renderChannel = ({ name, image }) => (
    <img
      src={image}
      key={`_${name}`}
      onClick={() => tv.changeChannel(hass, name)}
    />
  );

  const renderSource = ({ name, image }) => (
    <img
      src={image}
      key={`_${name}`}
      onClick={() => tv.selectSource(hass, name)}
    />
  );

  return (
    <div className="tv-card">
      <div className="tv-channels">{tvChannels.map(renderChannel)}</div>
      <div className="tv-sources">{tvSources.map(renderSource)}</div>
    </div>
  );
};

export default TV;
