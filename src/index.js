import ReactPanelElement from "./ReactPanelElement.js";
import App from "./components/App";
import './index.css';

customElements.define("home-check", ReactPanelElement(App));
