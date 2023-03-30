import ReactPanelElement from "./ReactPanelElement.js";
import App from "./components/App";
import "./animations.css";
import "./font.css";
import "./index.css";

// TODO-prod: customElement name is home-check
customElements.define("home-check-dev", ReactPanelElement(App));
