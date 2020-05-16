import React, { useState, useContext } from "react";
import axiosWithAuth from '../utils/axiosWithAuth';
import UserIdContext from '../contexts/UserIdContext';

const PostItems = props => {

  const { userId } = useContext(UserIdContext);

  const [item, setItem] = useState({});

  const handleChange = event => {
    setItem({
      ...item,
      [event.target.name]: event.target.value,
    });
  };

  function submitForm(e){ 
    e.preventDefault();
    const newItem = {
      name: item.name,
      description: item.description,
      price: item.price,
      category: item.category,
      location: item.location, 
      itemImg: item.itemImg,
      user_id: `${userId}`
    }

    axiosWithAuth()
      .post('/items', newItem)
      .then(response => {
        props.history.push(`/userprofile/${response.data.id}`)
      })
      .catch(err => console.log(err))
  }
   

  return (
    <div>
      <form onSubmit={submitForm} className="post-item-form">
        <h2 className="item-title">Add an Item</h2>
        <label>Name</label>
        <input  className="post-item-input"
          type="text"
          name="name"
          placeholder="Name"
          value={item.name}
          onChange={handleChange}
        /> <br />
        <label>Descripition</label>
        <input className="post-item-input"
          type="text"
          name="description"
          placeholder="Description"
          value={item.description}
          onChange={handleChange}
        /> <br />
        <label>Price</label>
        <input className="post-item-input"
          type="text"
          name="price"
          placeholder="Price"
          value={item.price}
          onChange={handleChange}
        /> <br />
        <label>Category</label>
        <input className="post-item-input"
          type="text"
          name="category"
          placeholder="Category"
          value={item.category}
          onChange={handleChange}
        /> <br />
        <label>Location</label>
        <input className="post-item-input"
          type="text"
          name="location"
          placeholder="Location"
          value={item.location}
          onChange={handleChange}
        /> <br />
        <label>Image URL</label>
        <input className="post-item-input"
          type="text"
          name="itemImg"
          placeholder="Image URL"
          value={item.itemImg}
          onChange={handleChange}
        /> <br />
        <button type="submit" className="edit-user-buttons">Add</button>
      </form>
    </div>
  );
};

export default PostItems;