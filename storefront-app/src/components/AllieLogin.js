import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';


const AllieLogin = (props) => {

    const [formData, setFormData] = useState({
        credentials: {
            username: '',
            password: ''
        },
        isFetching: false
    })

    const onChange = (e) => {
        setFormData({
            ...formData,
            credentials: {
                ...formData.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    const login = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('/login', formData.credentials)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                // props.history.push('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={login}>
            <h1>Login Here!</h1>
            <input
                type="text"
                name="username"
                value={formData.credentials.username}
                placeholder="Username"
                onChange={onChange}
            />
            <input
                type="password"
                name="password"
                value={formData.credentials.password}
                placeholder="Password"
                onChange={onChange}
            />
            <button>
                Log in
            </button>
        </form>
    )
}

export default AllieLogin;