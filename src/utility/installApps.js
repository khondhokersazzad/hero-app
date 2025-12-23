// utility/installApps.js

const STORAGE_KEY = "installedApps";

export const getStoredApps = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const addToStore = (id) => {
  const stored = getStoredApps();
  if (!stored.includes(id)) {
    stored.push(id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  }
};

export const removeFromStore = (id) => {
  const stored = getStoredApps();
  const updated = stored.filter((appId) => appId !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

export const isInstalled = (id) => {
  const stored = getStoredApps();
  return stored.includes(id);
};
