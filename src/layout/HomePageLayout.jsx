import React from 'react';
import { Outlet } from 'react-router';

const HomePageLayout = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default HomePageLayout;