import React from "react";
import './DashboardCard.css';

const DashboardCard = ({ children, ...props }) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, props);
    }
  });
  return <div className="dashboard-card">{childrenWithProps}</div>;
};

export default DashboardCard;
