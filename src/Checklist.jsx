import React, { useState, useEffect } from 'react';
import './checklist.css';

function Checklist() {
  const [items, setItems] = useState([
    { id: 1, text: 'Non Perishable Food', checked: false },
    { id: 2, text: 'Bottled Water', checked: false },
    { id: 3, text: 'First aid-Kit & Handbook', checked: false },
    { id: 4, text: 'Flashlight', checked: false },
    { id: 5, text: 'Fire Extinguisher', checked: false },
    { id: 6, text: 'Can Opener', checked: false },
    { id: 7, text: 'Dust Mask', checked: false },
    { id: 8, text: 'Battery powered Radio', checked: false },
    { id: 9, text: 'Industrial Gloves', checked: false },
    { id: 10, text: 'Match box', checked: false },
    { id: 11, text: 'Wrench Tool-kit', checked: false },
    { id: 12, text: 'Local Maps', checked: false },
    { id: 13, text: 'Hygiene Supplies', checked: false },
    { id: 14, text: 'Warm Blanket', checked: false },
    { id: 15, text: 'Duct Tapes', checked: false },
  ]);

  const [newItemText, setNewItemText] = useState('');

  useEffect(() => {
    // Load items from local storage on component mount
    const storedItems = JSON.parse(localStorage.getItem('items'));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  useEffect(() => {
    // Save items to local storage whenever the 'items' state changes
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const handleCheckboxChange = (id) => {
    // Update the 'checked' property of the item with the given id
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleDeleteItem = (id) => {
    // Remove the item with the given id
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleAddItem = () => {
    if (newItemText.trim() !== '') {
      // Create a new item object and add it to the list
      const newItem = {
        id: Date.now(),
        text: newItemText,
        checked: false,
      };

      setItems((prevItems) => [...prevItems, newItem]);
      setNewItemText(''); // Clear the input field
    }
  };

  // Calculate the total number of items and checked items
  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked).length;

  // Calculate the ratio of checked items to total items
  const ratio = checkedItems / totalItems;

  // Determine the message based on the ratio
  let message = '';
  if (ratio <= 0 || ratio <= 1 / 5) {
    message = "You are in real need of emergency items";
  } else if (ratio >= 1 / 5 && ratio <= 2 / 5) {
    message = "You are not on a good level yet";
  } else if (ratio > 2 / 5 && ratio <= 3 / 5) {
    message = "You are halfway there";
  } else if (ratio > 3 / 5 && ratio <= 4 / 5) {
    message = "Finally, you are getting there";
  } else if (ratio > 4 / 5 && ratio < 1) {
    message = "Just a little more";
  } else if (ratio === 1) {
    message = "Hooray, you did it!";
  }

  return (
    <div className="checklist">
      <div className="para">
        <p>
          <i>
            Below is the list to stock up the necessary stuff for an{' '}
            <strong>Emergency</strong>. Check the check-boxes to keep track of items you have already available.
          </i>
        </p>
        <p>
          <i>
            If you think something is missing, you can add it using the input field or delete an option from your list if something seems unnecessary.
          </i>
        </p>
      </div>
      <h1><strong>Survival Check-List</strong></h1>
      <div className="inputdata">
        <input
          type="text"
          placeholder="Add an item..."
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
        />
        <button className="addbutton" onClick={handleAddItem}>
          Add
        </button>
      </div>
      <br />
      <div className="item-count">
        <div style={{ paddingRight: '10px', color: 'red' }}>Total Items: {totalItems}</div>
        <div style={{ paddingLeft: '10px', color: '#4CAF50' }}>Checked Items: {checkedItems}</div>
      </div>
      <div className="message">
        {message && <p>{message}</p>}
      </div>
      <ul className="ul-vertical">
        {items.map((item) => (
          <li key={item.id} className={item.checked ? 'checked' : ''}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange(item.id)}
            />
            {item.text}
            <button onClick={() => handleDeleteItem(item.id)}>×</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Checklist;
