import React from "react";

const withActionSheet = (WrapperComponent, options) => (props) => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => setOpen((open) => !open);

  return (
    <>
      <div onClick={handleClick}>
        <WrapperComponent {...props} />
      </div>
      <ActionSheet isOpen={isOpen} setOpen={setOpen} {...options} />
    </>
  );
};

export default withActionSheet;
