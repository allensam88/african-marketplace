import React, { useState, useEffect } from "react";
import axiosWithAuth from '../utils/axiosWithAuth';
import ItemCard from './ItemCard';
import EditCard from './EditCard';
import {Route}from 'react-router-dom';

const ItemList = () => {
  const [editItem, setEditItem] = useState(false);
  const [itemToEdit, setItemToEdit] = useState([]);
  const [items, setItems] = useState([]);


  const editItems = items => {
    setEditItem(true);
    setItemToEdit(items);
  };

  useEffect(() => {
    axiosWithAuth()
      .get('https://african-marketplace-1.herokuapp.com/api/items')
      .then(response => setItems(response.data))
      .catch(error => console.log("GET request Failed", error));
  }, []);

  const saveEdit = id => {
    // id.preventDefault();
    axiosWithAuth()
      .put(`/items/${id}`, itemToEdit)
      .then(response => {
        setEditItem(false);
      })
      .catch(error => console.log("PUT failed", error));
  };

  const deleteItem = id => {
    console.log("delete", id);
    axiosWithAuth('helper')
      .delete(`/items/${id}`)
      .then(response => {
        editItem(items.filter(item => item.id !== response.data));
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <p>African Item Market</p>
      <div>
        <Route to="/marketplace"/>
        {items.map(item => ( 
        <ItemCard item={item} editItems={editItems} deleteItem={deleteItem} saveEdit={saveEdit}/>))}
      </div>
      <Route to="/editcard"/>
      <EditCard setItemToEdit={setItemToEdit} editItem={editItem} itemToEdit={itemToEdit} saveEdit={saveEdit} setItems={setItems}/>
      <div/>
    </div>
  );
};

export default ItemList;
