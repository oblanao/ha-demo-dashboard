import React from "react";
import withSlideAnimation from "./withAnimation";

const ActionSheetContent = ({ show, setShow, title, subtitle, actions }) => {
  const handleCancel = () => {
    setShow(false);
  };

  const showAction = ({ caption, onClick, isDestructive }) => (
    <button
      className={isDestructive ? "action-button destructive" : "action-button"}
      onClick={onClick}
      key={`btn-action-${caption}`}
    >
      {caption}
    </button>
  );

  return (
    <div className="actionsheet">
      <div className="actionsheet-contents">
        <div className="actionsheet-header flex-col-center">
          <h3>{title}</h3>
          {!!subtitle && <p>{subtitle}</p>}
        </div>
        <div className="actionsheet-action-buttons">
          {actions.map(showAction)}
          {/* <button className="action-button destructive">Option 1</button>
          <button className="action-button">Option 2</button> */}
        </div>
      </div>
      <div className="actionsheet-contents">
        <button
          className="action-button action-button-separate"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default withSlideAnimation(ActionSheetContent);
