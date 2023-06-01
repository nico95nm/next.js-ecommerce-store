export function getLocalStorage(key) {
  // Is testing if we are in the browser
  if (typeof window === 'undefined') return undefined;
  return window.localStorage.getItem(key);
}
