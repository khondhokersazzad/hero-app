import React from 'react';

const TrustSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-16">
      <div className="max-w-6xl mx-auto px-6 text-center text-white">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Trusted By Millions, Built For You
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Item 1 */}
          <div>
            <p className="text-sm opacity-80 mb-2">Total Downloads</p>
            <h3 className="text-4xl font-extrabold">29.6M</h3>
            <p className="text-sm mt-2 opacity-80">
              21% More Than Last Month
            </p>
          </div>

          {/* Item 2 */}
          <div>
            <p className="text-sm opacity-80 mb-2">Total Reviews</p>
            <h3 className="text-4xl font-extrabold">906K</h3>
            <p className="text-sm mt-2 opacity-80">
              46% More Than Last Month
            </p>
          </div>

          {/* Item 3 */}
          <div>
            <p className="text-sm opacity-80 mb-2">Active Apps</p>
            <h3 className="text-4xl font-extrabold">132+</h3>
            <p className="text-sm mt-2 opacity-80">
              31 More Will Launch
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustSection;
