import React, { useState, useRef, useEffect } from 'react';
import '../../styles/CommentSection.scss';

const CommentSection = ({ store, selectedItem, setStore }) => {
  const [itemText, setItemText] = useState('');
  const [currentItem, setCurrentItem] = useState({ ...store[selectedItem] });
  const textFieldRef = useRef(null);

  useEffect(() => {
    setCurrentItem({ ...store[selectedItem] });
  }, [store, selectedItem]);

  useEffect(() => {
    const saveToStore = () => {
      const copyOfAllStore = store.slice();
      copyOfAllStore[selectedItem] = currentItem;
      setStore([...copyOfAllStore]);
    };

    const setComment = (event) => {
      if (event.ctrlKey && event.keyCode === 13) {
        const copyOfComments = { ...currentItem };
        const newComment = { avatar: null, text: itemText };
        copyOfComments.comments.push(newComment);
        setCurrentItem(copyOfComments);
        setItemText('');
        saveToStore();
      }
    };

    if (textFieldRef.current) {
      textFieldRef.current.addEventListener('keydown', setComment);
    }

    return () => {
      if (textFieldRef.current) {
        textFieldRef.current.removeEventListener('keydown', setComment);
      }
    };
  }, [itemText]);

  const handleFieldChange = (event) => {
    event.preventDefault();
    setItemText(event.target.value);
  };

  return (
    <React.Fragment>
      {store && selectedItem !== null && (
        <div className="comment">
          <h2 className="comment__title">Comments #{currentItem.name}</h2>
          <ul className="comment__list">
            {currentItem.comments &&
              currentItem.comments.map((element, index) => {
                return (
                  <li key={index} className="comment__item">
                    <div className="comment__avatar" />
                    <p className="comment__text">{element.text}</p>
                  </li>
                );
              })}
          </ul>
          <div className="flex-container">
            <div className="comment__avatar" />
            <textarea
              className="comment__field"
              value={itemText}
              ref={textFieldRef}
              onChange={handleFieldChange}
            />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default CommentSection;
