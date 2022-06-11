/**
 * service: media_player.play_media
 * target:
 *   entity_id: media_player.lg_webos_tv_uk6200pla
 * data:
 *   media_content_id: Kanal D HD
 *   media_content_type: channel
 */

const changeChannel = (hass, channelName) => {
  hass.callService("media_player", "play_media", {
    entity_id: "media_player.lg_webos_tv_uk6200pla",
    media_content_id: channelName,
    media_content_type: "channel",
  });
};

const pushButton = (hass, buttonName) => {
  hass.callService("webostv", "button", {
    entity_id: "media_player.lg_webos_tv_uk6200pla",
    button: buttonName,
  });
};

const selectSource = (hass, sourceName) => {
  hass.callService("media_player", "select_source", {
    entity_id: "media_player.lg_webos_tv_uk6200pla",
    source: sourceName,
  });
};

export { changeChannel, pushButton, selectSource };
