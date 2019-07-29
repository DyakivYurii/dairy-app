let store = [];

const getStoreFromLocalStorage = () => {
  const storeFromLocalStorage = JSON.parse(
    window.localStorage.getItem('store')
  );
  store = storeFromLocalStorage ? storeFromLocalStorage : [];
};

const saveStoreToLocalStorage = (event) => {
  event.preventDefault();
  window.localStorage.setItem('store', JSON.stringify(store));
};

const saveToStorage = (changes) => {
  store = changes;
};

const getStore = () => {
  return store;
};

window.addEventListener('load', getStoreFromLocalStorage);

window.addEventListener('beforeunload', saveStoreToLocalStorage);

export { getStore, saveToStorage };
