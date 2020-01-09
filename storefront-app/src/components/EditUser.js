import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const EditUser = (props) => {

    const [user, setUser] = useState({
        id: '',
        username: ''
    })

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
    }

    const deleteUser = (e) => {
        e.preventDefault();
        console.log("deleted");
        axiosWithAuth()
        .delete(`/users/${props.match.params.id}`);
        props.history.push('/login');
    }

    return (<>
        <h2 className="item-title">Edit Username</h2>
        <p>Current username: {user.username}</p>
        <form onSubmit={submitForm}>
            <input
                placeholder="Username"
                name="username"
                value={user.username}
                onChange={changeHandler}
                className="edit-username-input" />
                <br />
            <button className="edit-user-buttons" type="submit">
                Submit
            </button>
            <button className="edit-user-buttons" onClick={deleteUser} type="button">
                Delete Account
            </button>
        </form>
    </>)
}

export default EditUser;