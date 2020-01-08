import React, { useState } from "react";
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = props => {
  const [user, setUser] = useState({
    name: " ",
    descipition: " ",
    price: " ",
    category: " ",
    location: " "
  });

  const handleChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .post('https://african-marketplace-1.herokuapp.com/api/items', user)
      .then(response => {
          localStorage.setItem('token', response.data.token)
          props.history.push(`/MarketPlace/${response.data.id}`)
      })
      .catch(err => console.log(err))
}
  return (
    <div>
      <h1>Welcome to the African Market App!</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
        />
        <label>Descripition</label>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={user.description}
          onChange={handleChange}
        />
         <label>Price</label>
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={user.price}
          onChange={handleChange}
        />
        <label>Category</label>
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={user.category}
          onChange={handleChange}
        />
         <label>Location</label>
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={user.location}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Login;