import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const RegisterForm = props => {
    let history = useHistory();

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const handleChanges = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
        console.log(event.target.value);
    };
    const submitForm = event => {
        event.preventDefault()
        axios.post('https://african-marketplace-1.herokuapp.com/api/register', {
            username: user.username,
            password: user.password
          })
          .then(function (response) {
            console.log(response);
            history.push("/auth/login");
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    return(
        <form onSubmit={submitForm}>
            <img src={require('./logo.png')} />
            <fieldset>
            <legend>Create Account</legend>
                    <label htmlFor = "username">Username</label>
                    <input id="username"
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                    onChange={handleChanges}
                    value={user.username}/>
                    <label htmlFor = "password">Password</label>
                    <input id="password"
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    onChange={handleChanges}
                    value={user.password}/>
            </fieldset>
            <button type="submit">Create Account</button>
            <Link className="form-button" to="/auth/login">
                <button renderas="button">
                    Already have an Account?
                </button>
            </Link>
        </form>
    )
};

export default RegisterForm;