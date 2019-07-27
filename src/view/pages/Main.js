import React from 'react';
import Info from '../components/Info';
import ItemSection from '../components/ItemSection';
import CommentSection from '../components/CommentSection';
import '../../styles/Main.scss';

const Main = () => {
  return (
    <main className="main">
      <Info />
      <div className="main__right">
        <ItemSection />
        <CommentSection />
      </div>
    </main>
  );
};

export default Main;
