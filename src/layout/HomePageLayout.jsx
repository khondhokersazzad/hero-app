import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const HomePageLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar></NavBar>
      <main className="grow">
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default HomePageLayout;