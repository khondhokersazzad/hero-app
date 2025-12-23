import React from 'react';
import HeroSection from '../components/HeroSection';
import TrustSection from '../components/TrustSection';
import TrendingApps from '../components/TrendingApps';

const Home = () => {
  return (
    <div className='bg-gray-100'>
      <HeroSection></HeroSection>
      <section>
        <TrustSection></TrustSection>
      </section>

      <section>
        <TrendingApps></TrendingApps>
      </section>
    </div>
  );
};

export default Home;