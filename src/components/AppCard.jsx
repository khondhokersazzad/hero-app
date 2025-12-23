import React from 'react';

const AppCard = ({ title, downloads, rating, image }) => {
  return (
    <div className="w-72 bg-white rounded-2xl shadow-lg p-4">
      
      {/* Image */}
      <div className="w-full h-44 bg-gray-200 rounded-xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h3 className="mt-4 text-lg font-semibold text-gray-900">
        {title}
      </h3>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between">
        
        {/* Downloads */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-green-100 rounded-lg">
          <span className="text-green-600 text-lg">⬇</span>
          <span className="text-green-700 font-medium text-sm">
            {downloads}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-orange-100 rounded-lg">
          <span className="text-orange-500 text-lg">★</span>
          <span className="text-orange-600 font-medium text-sm">
            {rating}
          </span>
        </div>

      </div>
    </div>
  );
};

export default AppCard;
