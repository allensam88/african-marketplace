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

  console.log("item", item)


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
        console.log("response", response)
        props.history.push(`/userprofile/${response.data.id}`)
      })
      .catch(err => console.log(err))
      console.log('works')
  }
   

  return (
    <div>
      <h1>Welcome to the African Market App!</h1>
      <form onSubmit={submitForm} className="form">
        <label>Name</label>
        <input  className="border"
          type="text"
          name="name"
          placeholder="Name"
          value={item.name}
          onChange={handleChange}
        />
        <label>Descripition</label>
        <input className="border"
          type="text"
          name="description"
          placeholder="Description"
          value={item.description}
          onChange={handleChange}
        />
        <label>Price</label>
        <input className="border"
          type="text"
          name="price"
          placeholder="Price"
          value={item.price}
          onChange={handleChange}
        />
        <label>Category</label>
        <input className="border"
          type="text"
          name="category"
          placeholder="Category"
          value={item.category}
          onChange={handleChange}
        />
        <label>Location</label>
        <input className="border"
          type="text"
          name="location"
          placeholder="Location"
          value={item.location}
          onChange={handleChange}
        />
        <button type="submit" className="add-btn">Add</button>
      </form>
    </div>
  );
};

export default PostItems;