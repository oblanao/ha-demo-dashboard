# Development - How to

## Project components

### Entry point

The entry point of the app is `/components/App`

### The `hass` prop

The hass prop gives access to [all the data](https://developers.home-assistant.io/docs/frontend/data/) from the _Home Assistant_ server.

### Higher Order Components

1. `withHass` - export components using this HOC to automatically add the _hass_ prop

### Hooks

1. `useHass` - returns `hass` object. Under development

## Project structure

All that matters is inside the `/src` folder.

### Components - `/components/`

All components are located here. Keep in mind the entry point of the custom panel which is the `<App />` component.

For demo purposes, this starter pack uses `<Dashboard />` component, which is thoroughly documented.

### Context - `/context/`

Used for creating context, including **HassContext** which provides access to the `hass` overpowered object.

### Data - `/data/`

Used for storing static data, in _JSON_ format. Examples of JSON static data

* TV channels information

### Functions - `/functions/`

Classic folder

### HOC - `/hoc/`

_Higher order components_, including the `withHass` HOC, which adds the `hass` prop to any component.

### Hooks - `/hooks/`

Classic folder, including the `useHass` hook, which provides interaction with the `hass` state.
