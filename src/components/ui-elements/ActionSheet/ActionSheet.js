import "./ActionSheet.css";
import React from "react";
import ActionSheetContent from "./ActionSheetContent";

const ActionSheet = ({ isOpen, setOpen, subtitle, title, actions = [] }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-backdrop" onClick={() => setOpen(false)}></div>
      )}
      <ActionSheetContent
        show={isOpen}
        setShow={setOpen}
        title={title}
        subtitle={subtitle}
        actions={actions}
      />
    </>
  );
};

export default ActionSheet;
