import React from 'react';

// components/AppRow.jsx
const AppRow = ({ app, onUninstall }) => {
  return (
    <div className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm border">
      
      {/* Left */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-gray-200 rounded-lg overflow-hidden">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900">
            {app.title}
          </h3>

          <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
            <span className="text-green-600">
              ⬇ {Math.floor(app.downloads / 1_000_000)}M
            </span>
            <span className="text-orange-500">
              ★ {app.ratingAvg}
            </span>
            <span>{app.size} MB</span>
          </div>
        </div>
      </div>

      {/* Action */}
      <button
        onClick={() => onUninstall(app.id)}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-xs font-medium"
      >
        Uninstall
      </button>
    </div>
  );
};

export default AppRow;

