import React, { useState } from "react";
import ActionSheet from "./ActionSheet";

const WithActionSheet = ({ children, options, ...props }) => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => setOpen((open) => !open);

  return (
    <>
      <div onClick={handleClick}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { ...props });
          }
          console.log('not a child', child)
          return child
        })}
      </div>
      <ActionSheet isOpen={isOpen} setOpen={setOpen} {...options} />
    </>
  );
};

export default WithActionSheet;
