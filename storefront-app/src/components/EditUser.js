import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const EditUser = (props) => {

    console.log("props", props)

    const [user, setUser] = useState({
        id: '',
        username: ''
    })

    const [fetching, isFetching] = useState(false)

    const getUser = () => {
        axiosWithAuth()
            .get(`/users/${props.match.params.id}`)
            .then(res => setUser(res.data))
    }

    useEffect(() => {
        getUser()
    }, [])


    const changeHandler = (e) => {
        setUser({
            ...user,
            username: e.target.value
        })
    }

    const submitForm = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .put(`/users/${props.match.params.id}`, user)
            .then(console.log("submitForm fired", user))
    }

    console.log("user", user)

    return (<>
        <h2>Edit Username</h2>
        <p>Current username: {user.username}</p>
        <form onSubmit={submitForm}>
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