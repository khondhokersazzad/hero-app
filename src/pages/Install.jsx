import axios from "axios";
import React, { useEffect, useState } from "react";
import { getStoredApps } from "../utility/installApps";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AppRow from "../components/AppRow";

const Install = () => {
  const [collection, setCollection] = useState([]);
  const [appList, setAppList] = useState([]);

  useEffect(() => {
    axios
      .get("/apps.json")
      .then((res) => setCollection(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (collection.length > 0) {
      const storedIds = getStoredApps();
      const idSet = new Set(storedIds.map(Number));
      const myAppList = collection.filter((app) =>
        idSet.has(app.id)
      );
      setAppList(myAppList);
    }
  }, [collection]);

  // temporary uninstall handler (UI only)
  const handleUninstall = (id) => {
    setAppList((prev) => prev.filter((app) => app.id !== id));
  };

  return (
    <div className="py-10 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="pb-9 text-center">
        <h1 className="text-[48px] font-bold">
          Your Installed Apps
        </h1>
        <h3 className="text-[24px] text-gray-400 font-bold">
          Explore All Trending Apps on the Market developed by us
        </h3>
      </div>

      <section className="px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">
            Apps Found ({appList.length})
          </h1>
        </div>

        <Tabs>
          <TabList>
            <Tab>Installed Apps</Tab>
          </TabList>

          <TabPanel>
            <div className="space-y-4">
              {appList.length === 0 ? (
                <p className="text-center text-gray-500">
                  No apps installed
                </p>
              ) : (
                appList.map((app) => (
                  <AppRow
                    key={app.id}
                    app={app}
                    onUninstall={handleUninstall}
                  />
                ))
              )}
            </div>
          </TabPanel>
        </Tabs>
      </section>
    </div>
  );
};

export default Install;
