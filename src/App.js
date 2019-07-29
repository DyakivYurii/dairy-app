import React, { useState, useEffect } from 'react';
import Info from './view/components/Info';
import ItemSection from './view/components/ItemSection';
import CommentSection from './view/components/CommentSection';
import { getStore, saveToStorage } from './store/store';
import './styles/App.scss';

function App() {
  const [store, setStore] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const gottenStore = getStore();
    setStore(gottenStore);
  }, []);

  useEffect(() => {
    saveToStorage(store);
  }, [store]);

  return (
    <main className="app">
      <Info />
      <div className="app__right">
        <ItemSection
          store={store}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          setStore={setStore}
        />
        <CommentSection
          store={store}
          selectedItem={selectedItem}
          setStore={setStore}
        />
      </div>
    </main>
  );
}

export default App;
