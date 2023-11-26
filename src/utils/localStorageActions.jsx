const setStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getStorage = (key) => {
  return localStorage.getItem(key);
};

const clearStorageItem = (key) => {
  localStorage.removeItem(key);
};
const clearStorage = () => {
  localStorage.clear();
};

const shakeStorage = (cb) => {
  return window.addEventListener("storage", cb);
};

export const useLocalStorageUtils = {
  setStorage,
  getStorage,
  clearStorageItem,
  clearStorage,
  shakeStorage,
};
