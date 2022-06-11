import React from 'react';

const Dashboard = ({ ...props }) => {
  return <pre>{JSON.stringify(props, null, 3)}</pre>;
};

export default Dashboard;
