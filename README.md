# HomeAssistant React Dashboard

## Motivation

The goal of this project is to have a wall mounted tablet running a dashboard to control my home.

The goal is really to have one screen without any menu so I can have a global view of the more important thing in the home: alarm, lights, camera.

## Getting started

Install

```bash
npm run install
```

Run a development server

```bash
npm run start
```

Add the following entry to your `configuration.yaml` file:

```yaml
panel_custom:
  - name: react-panel # must match custom element name (in index.js), i.e. customElements.define("react-panel",...)
    sidebar_title: React Panel
    sidebar_icon: mdi:react
    url_path: react-panel-dev
    js_url: http://192.168.68.66:8080/main.js
    embed_iframe: true
    trust_external_script: true
    config:
      name: World
```

Restart Home Assistant.

## Deploy

To deploy it, you need to make a build

```bash
npm run build
```

This will generate a new build of the panel in the `dist` folder. Copy the content of this folder and place it in `<home assistant config>/www/react-panel`.

This will make it available from Home Assistant via the url `/local/react-panel/main.js`.

We then have to configure Home Assitant to use it:

```yaml
panel_custom:
  - name: react-panel # must match custom element name (in index.js), i.e. customElements.define("react-panel",...)
    sidebar_title: React Panel
    sidebar_icon: mdi:react
    url_path: react-panel-prod
    module_url: /local/react-panel/main.js
    js_url: /local/react-panel/main.js
    embed_iframe: true
    config:
      name: World
```
