import axios from "axios";
import React, { useEffect, useState } from "react";
import AppCard from "./AppCard";
import { Link } from "react-router";

const TrendingApps = () => {
  const [collection, setCollection] = useState([]);
  useEffect(() => {
    axios
      .get("/apps.json")
      .then((res) => setCollection(res.data))

      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="py-10 max-w-7xl mx-auto">
      <div className="pb-9">
        <h1 className="text-[48px] font-bold text-center">Trending Apps</h1>
        <h3 className="text-[24px] text-gray-400 font-bold text-center">
          Explore All Trending Apps on the Market developed by us
        </h3>
      </div>
      <div className="flex justify-center pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ">
          {collection.slice(0, 8).map((m) => {
            return (
              <Link to={`/app-details/${m?.id}`}>
                <AppCard
                  title={m?.title}
                  downloads={m?.downloads}
                  rating={m?.ratingAvg}
                  image={m?.image}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex  justify-center items-center gap-3">
        <Link
          className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] btn-md text-white"
          to="/apps"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
