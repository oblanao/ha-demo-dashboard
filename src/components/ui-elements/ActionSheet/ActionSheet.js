import "./ActionSheet.css";
import React from 'react';
import ActionSheetContent from "./ActionSheetContent";

const ActionSheet = ({
  isOpen,
  setOpen,
  subtitle,
  title = "ActionSheet Title",
}) => {
  return (
    <>
      {isOpen && (
        <div className="modal-backdrop" onClick={() => setOpen(false)}></div>
      )}
      <ActionSheetContent show={isOpen} title={title} subtitle={subtitle} />
    </>
  );
};

export default ActionSheet;
