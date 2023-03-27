import React from 'react';
import withSlideAnimation from "./withAnimation";

const ActionSheetContent = ({ show, title, subtitle }) => {
  return (
    <div className="actionsheet">
      <div className="actionsheet-contents">
        <div className="actionsheet-header flex-col-center">
          <h3>{title}</h3>
          {!!subtitle && <p>{subtitle}</p>}
        </div>
        <div className="actionsheet-action-buttons">
          <button className="action-button destructive">Option 1</button>
          <button className="action-button">Option 2</button>
        </div>
      </div>
      <div className="actionsheet-contents">
        <button className="action-button action-button-separate">Cancel</button>
      </div>
    </div>
  );
};

export default withSlideAnimation(ActionSheetContent);
