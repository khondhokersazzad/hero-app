import axios from "axios";
import React, { useEffect, useState } from "react";
import AppCard from "../components/AppCard";
import { Link } from "react-router";

const Apps = () => {
  const [collection, setCollection] = useState([]);
    useEffect(() => {
      axios
        .get("/apps.json")
        .then((res) => setCollection(res.data))
  
        .catch((err) => console.log(err));
    }, []);
  return (
    <div>
      <section className="py-10">
        <h1 className="text-[48px] font-bold text-center">Our All Applications</h1>
        <h3 className="text-[24px] text-gray-400 font-bold text-center">
          Explore All Apps on the Market developed by us. We code for Millions
        </h3>
      </section>

      <section className="">
        <div className="max-w-7xl mx-auto flex justify-between">
          <h1>({collection.length})Apps Found</h1>
          <form action="">
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" required placeholder="Search Apps" />
            </label>
          </form>
        </div>
        <div>
          <div className="flex justify-center pb-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ">
          {collection.map((m) => {
          return (

            <Link to={`/app-details/${m?.id}`}>
              <AppCard
              title= {m?.title}
              downloads={m?.downloads}
              rating={m?.ratingAvg}
              image={m?.image}
            />
            </Link>
          );
        })}
        </div>
        
      </div>
        </div>
      </section>
    </div>
  );
};

export default Apps;
