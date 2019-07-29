import React, { useState, useEffect } from 'react';
import '../../styles/ItemSection.scss';

const ItemSection = ({ store, selectedItem, setSelectedItem, setStore }) => {
  const [itemText, setItemText] = useState('');
  const [allItems, setAllItems] = useState([...store]);

  useEffect(() => {
    setAllItems([...store]);
  }, [store, selectedItem]);

  const handleChangeInput = (event) => {
    setItemText(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const copyOfArray = [...allItems];
    const newItem = { name: itemText, comments: [] };
    copyOfArray.push(newItem);
    setAllItems(copyOfArray);
    setStore(copyOfArray);
    setItemText('');
  };

  const handleDeleteItem = (index) => (event) => {
    event.preventDefault();
    event.stopPropagation();
    const copyOfArray = [...allItems];
    copyOfArray.splice(index, 1);
    setAllItems(copyOfArray);
    setStore(copyOfArray);
    setSelectedItem(null);
  };

  const setSelection = (id) => () => {
    if (selectedItem === id) {
      return setSelectedItem(null);
    }
    return setSelectedItem(id);
  };

  return (
    <section className="item">
      <h2 className="item__title">Items</h2>
      <form method="GET" className="item__form" onSubmit={handleSubmitForm}>
        <input
          className="item__input"
          type="text"
          value={itemText}
          placeholder="Type name here..."
          onChange={handleChangeInput}
        />
        <button className="item__submit" type="submit">
          Add new
        </button>
      </form>
      <ul className="item__list">
        {allItems.map((element, index) => {
          return (
            <li
              className="item__item"
              key={index + element.name}
              onClick={setSelection(index)}
            >
              {selectedItem === index && <span className="item__span" />}
              <div className="item__left-flex">
                <h3 className="item__item-title">{element.name}</h3>
                <span className="item__comments">
                  {element.comments.length}
                </span>
              </div>
              <button
                type="button"
                className="item__delete"
                onClick={handleDeleteItem(index)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ItemSection;
