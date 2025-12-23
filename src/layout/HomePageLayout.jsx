import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/NavBar';

const HomePageLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default HomePageLayout;