import React, { useState, useEffect } from "react";
import axiosWithAuth from '../utils/axiosWithAuth';
import ItemCard from './ItemCard';

const ItemList = () => {
  const [newItems, setNewItems] = useState(false);
  const [itemToEdit, setItemToEdit] = useState([]);
  const [items, setItems] = useState([]);
  console.log(items);

  const editItems = items => {
    setItems(true);
    setItemToEdit(items);
  };

  useEffect(() => {
    axiosWithAuth()
      .get('https://african-marketplace-1.herokuapp.com/api/items')
      .then(response => setItems(response.data))
      .catch(error => console.log("GET request Failed", error));
  }, []);

  const saveEdit = id => {
    id.preventDefault();
    axiosWithAuth()
      .put(`/api/items/${id}`, itemToEdit)
      .then(response => {
        setNewItems(false);
      })
      .catch(error => console.log("PUT failed", error));
  };

  const deleteColor = id => {
    axiosWithAuth()
      .delete(`/api/items/${id}`)
      .then(response => {
      //   updateItems(items.filter(item => item.id !== response.data));
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <p>African Item Market</p>
      <div>
        {items.map(item => (
          <ItemCard item={item}/>
        ))}
      </div>
      {newItems && (
        <form onSubmit={saveEdit}>
          <legend>edit item</legend>
          <label>
            item name:
            <input
              onChange={e =>
                setItemToEdit({ ...itemToEdit, item: e.target.value })
              }
              value={itemToEdit.item}
            />
          </label>
          <label>
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
