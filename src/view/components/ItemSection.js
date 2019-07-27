import React from 'react';
import '../../styles/ItemSection.scss';

const ItemSection = () => {
  return (
    <section className="item">
      <h2 className="item__title">Items</h2>
      <form method="GET" className="item__form">
        <input
          className="item__input"
          type="text"
          value="Something"
          placeholder="Type name here..."
        />
        <button className="item__submit" type="submit">
          Add new
        </button>
      </form>
      <ul className="item__list">
        <li className="item__item">Item</li>
      </ul>
    </section>
  );
};

export default ItemSection;
