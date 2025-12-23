import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);

  useEffect(() => {
    axios.get("/apps.json").then((res) => {
      const foundApp = res.data.find(
        (item) => item.id === Number(id)
      );
      setApp(foundApp);
    });
  }, [id]);

  if (!app) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  // total ratings count (for percentage bars)
  const totalRatings = app.ratings.reduce(
    (sum, r) => sum + r.count,
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 bg-white">
      
      {/* Header */}
      <div className="flex gap-6 border-b pb-6">
        
        {/* App Icon */}
        <div className="w-28 h-28 bg-gray-100 rounded-xl flex items-center justify-center">
          <img
            src={app.image}
            alt={app.title}
            className="w-20 h-20 object-contain"
          />
        </div>

        {/* App Info */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900">
            {app.title}
          </h1>

          <p className="text-sm text-gray-500">
            Developed by{" "}
            <span className="text-blue-600">
              {app.companyName}
            </span>
          </p>

          {/* Stats */}
          <div className="flex gap-10 mt-4">
            <Stat
              label="Downloads"
              value={`${Math.floor(app.downloads / 1_000_000)}M`}
            />
            <Stat
              label="Average Ratings"
              value={app.ratingAvg}
            />
            <Stat
              label="Total Reviews"
              value={`${Math.floor(app.reviews / 1000)}K`}
            />
          </div>

          {/* Install Button */}
          <button className="mt-5 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg text-sm font-medium">
            Install Now ({app.size} MB)
          </button>
        </div>
      </div>

      {/* Ratings */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-4">Ratings</h2>

        <div className="space-y-3">
          {app.ratings
            .slice()
            .reverse() // show 5 star first
            .map((rate) => {
              const percentage = (
                (rate.count / totalRatings) *
                100
              ).toFixed(1);

              return (
                <div
                  key={rate.name}
                  className="flex items-center gap-4"
                >
                  <span className="w-12 text-sm text-gray-500">
                    {rate.name}
                  </span>

                  <div className="flex-1 h-3 bg-gray-200 rounded-full">
                    <div
                      className="h-3 bg-orange-500 rounded-full"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* Description */}
      <div className="mt-12">
        <h2 className="text-lg font-semibold mb-3">
          Description
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          {app.description}
        </p>
      </div>
    </div>
  );
};

const Stat = ({ label, value }) => (
  <div>
    <p className="text-sm text-gray-500">{label}</p>
    <p className="text-lg font-semibold">{value}</p>
  </div>
);

export default AppDetails;
