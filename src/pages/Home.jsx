import React from 'react';
import HeroSection from '../components/HeroSection';
import TrustSection from '../components/TrustSection';

const Home = () => {
  return (
    <div className='bg-gray-100'>
      <HeroSection></HeroSection>
      <section>
        <TrustSection></TrustSection>
      </section>
    </div>
  );
};

export default Home;