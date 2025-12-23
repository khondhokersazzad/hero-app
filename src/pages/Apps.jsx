import axios from "axios";
import React, { useEffect, useState } from "react";
import AppCard from "../components/AppCard";
import { Link } from "react-router"; // Fixed import for 'react-router-dom'

const Apps = () => {
  const [collection, setCollection] = useState([]);
  const [search, setSearch] = useState(""); // Initialize with empty string

  useEffect(() => {
    axios
      .get("../apps.json")
      .then((res) => setCollection(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Logical Fix: If search is empty, show the whole collection. 
  // Otherwise, filter based on the term.
  const term = search.trim().toLowerCase();
  const displayedApps = term 
    ? collection.filter(app => app.title.toLowerCase().includes(term)) 
    : collection;

  return (
    <div>
      <section className="py-10">
        <h1 className="text-[48px] font-bold text-center">Our All Applications</h1>
        <h3 className="text-[24px] text-gray-400 font-bold text-center">
          Explore All Apps on the Market developed by us. We code for Millions
        </h3>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          {/* Use displayedApps.length to show actual count after searching */}
          <h1 className="text-xl font-semibold">({displayedApps.length}) Apps Found</h1>
          
          <form onSubmit={(e) => e.preventDefault()}>
            <label className="input input-bordered flex items-center gap-2">
              <svg className="h-4 w-4 opacity-70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                type="search" 
                placeholder="Search Apps" 
                className="grow"
              />
            </label>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-20">
          {displayedApps.map((m) => (
            <Link key={m.id} to={`/app-details/${m?.id}`}>
              <AppCard
                title={m?.title}
                downloads={m?.downloads}
                rating={m?.ratingAvg}
                image={m?.image}
              />
            </Link>
          ))}
        </div>
        
        {/* Handle "No results found" state */}
        {displayedApps.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No apps found matching "{search}"</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Apps;