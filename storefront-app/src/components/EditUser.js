import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const EditUser = () => {

    const [user, setUser] = useState({
        id: '',
        username: ''
    })

    const [fetching, isFetching] = useState(false)

    const getUser = (id) => {
        axiosWithAuth()
            .get(`/users/${id}`)
            .then(res => setUser(res.data))
    }

    const changeHandler = (e) => {
        setUser({
            ...user,
            username: e.target.value
        })
    }

    console.log("user", user)

    return (
        <form>
            <input
                placeholder={user.username}
                name="username"
                value={user.username}
                onChange={changeHandler} />
            <button>
                Submit
            </button>
        </form>
    )
}

export default EditUser;