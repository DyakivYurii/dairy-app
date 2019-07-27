import React from 'react';
import Info from './view/components/Info';
import ItemSection from './view/components/ItemSection';
import CommentSection from './view/components/CommentSection';
import './styles/App.scss';

function App() {
  return (
    <main className="app">
      <Info />
      <div className="app__right">
        <ItemSection />
        <CommentSection />
      </div>
    </main>
  );
}

export default App;
