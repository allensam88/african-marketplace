import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";


const ItemList = ({ items, updateItems }) => {
  console.log(items);
  const [newItems, setItems] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(initialColor);

  const editItems = items => {
    setItems(true);
    setItemToEdit(items);
  };

  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put('https://african-marketplace-1.herokuapp.com/api/items/:id', itemToEdit)
      .then(response => {
        updateItems(
          items.map(item =>
            item.id === itemToEdit.id ? response.data : item
          )
        );
        setItems(false);
      })
      .catch(error => console.log("PUT failed", error));
  };

  const deleteColor = item => {
    axiosWithAuth()
      .delete('https://african-marketplace-1.herokuapp.com/api/items/:id')
      .then(response => {
        updateItems(items.filter(item => item.id !== response.data));
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <p>African Item Market</p>
      <ul>
        {items.map(item => (
          <li key={item.item} onClick={() => editItems(item)}>
            <span>
              <span
                className="delete"
                onClick={e => {
                  e.stopPropagation();
                  deleteColor(item);
                }}
              >
                x
              </span>{" "}
              {item.item}
            </span>
            <div/>
          </li>
        ))}
      </ul>
      {newItems && (
        <form onSubmit={saveEdit}>
          <legend>edit item</legend>
          <label>
            item name:
            <input
              onChange={e =>
                setItemoEdit({ ...itemToEdit, item: e.target.value })
              }
              value={itemToEdit.item}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setItemToEdit({
                  ...itemToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={itemToEdit.code.hex}
            />
          </label>
          <div>
            <button type="submit">save</button>
            <button onClick={() => setItems(false)}>cancel</button>
          </div>
        </form>
      )}
      <div/>
    </div>
  );
};

export default ItemList;