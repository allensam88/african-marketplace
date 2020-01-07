import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const EditUser = () => {

    const [user, setUser] = useState({
        id: '',
        username: ''
    })

    const [fetching, isFetching] = useState(false)

    const getUser = () => {
        axiosWithAuth()
            .get(`/users/${user.id}`)
            .then(res => setUser(res.data))
    }

    const changeHandler = (e) => {
        setUser({
            ...user,
            username: e.target.value
        })
    }

    console.log("user", user)

    return (<>
        <h2>Edit Username</h2>

        <form>
            <input
                placeholder="Username"
                name="username"
                value={user.username}
                onChange={changeHandler} />
            <button>
                Submit
            </button>
        </form>
    </>)
}

export default EditUser;