import ReactPanelElement from "./ReactPanelElement.js";
import App from "./components/App";
import "./animations.css";
import "./font.css";
import "./index.css";

customElements.define("home-check", ReactPanelElement(App));
