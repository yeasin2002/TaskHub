export function dispatch() {
  window.dispatchEvent(new CustomEvent("local-changed"));
}

export function onLocalStorageChange(callback) {
  window.addEventListener("local-changed", callback);
  return () => window.removeEventListener("local-changed", callback);
}

export function dispatchManualChange() {
  function handleChange(event) {
    if (event.storageArea === localStorage) {
      dispatch();
    }
  }

  window.addEventListener("storage", handleChange);
  return () => window.removeEventListener("storage", handleChange);
}
export function setLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  dispatch();
}

export function parseLocal(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function removeLocal(key) {
  localStorage.removeItem(key);
  dispatch();
}
