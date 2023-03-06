import React from "react";
import "./Modal.css";

const Modal = ({ show, subtitle, title = "Modal Title" }) => {
  if (!show) {
    return;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-contents">
          <div className="modal-header flex-col-center">
            <h3>{title}</h3>
            {!!subtitle && <p>{subtitle}</p>}
          </div>
          <div className="modal-action-buttons">
            <button className="action-button">Option 1</button>
            <button className="action-button">Option 2</button>
            <button className="action-button">Option 3</button>
          </div>
        </div>
        <div className="modal-contents">
          <button className="action-button action-button-separate">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
