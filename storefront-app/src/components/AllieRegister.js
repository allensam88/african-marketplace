import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const AllieRegister = ({ history }) => {

  const [user, setUser] = useState({
    username: '',
    password: ''
    });

  const handleChanges = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
      axiosWithAuth()
        .post('/register', user)
        .then(response => {
          localStorage.setItem('user', JSON.stringify(response.data));
          history.push('/login');
          document.location.reload();
        })
        .catch(err => console.log(err.response));
      setUser({
        ...user,
        username: '',
        password: ''
      });
  };

  console.log("user", user)

  return (
    <main className="wrapper">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" className="input-container">
          <i className="far fa-user icon" />
          <input
            className="input-field"
            type="text"
            value={user.username}
            onChange={handleChanges}
            name="username"
            placeholder="Username"
          />
        </label>
        <label htmlFor="password" className="input-container">
          <i className="fas fa-unlock icon" />
          <input
            className="input-field"
            type="password"
            value={user.password}
            onChange={handleChanges}
            name="password"
            placeholder="Password"
          />
        </label>
          <button className="registerButton" type="submit">
          Register
          </button>
      </form>
    </main>
  );
};

export default AllieRegister;