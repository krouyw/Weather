function getLocalStorage(name) {
  return JSON.parse(localStorage.getItem(name))
}

function setLocalStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value))
}

export { getLocalStorage, setLocalStorage }
