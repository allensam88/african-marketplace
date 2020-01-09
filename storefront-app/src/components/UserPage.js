import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { Link } from 'react-router-dom';


const UserPage = (props) => {

    const [profile, setProfile] = useState()

    const id = localStorage.getItem('id')

    const getUser = () => {
        axiosWithAuth()
            .get(`/users/${id}/items`)
            .then(res => {
                console.log(res.data);
                return setProfile(res.data)
            })
    }

    useEffect(() => {
        getUser()
    }, [])

    console.log(profile)

    if (profile) {
        return (<>
            <div>
                <img
                    src={profile.profileImg}
                    className="profile-img"
                    alt="user-img"
                />
                <p>{profile.username}</p>
                <button onClick={() => props.history.push(`/postItems`)}>Add item</button>
                <button onClick={() => props.history.push(`/users/${id}`)}>Edit User</button>
                <div className="user-item-wrapper">
                    {profile.items.map(item => {
                        return (
                            <div className="user-item">
                                <ul>
                                    <li><h2>{item.name}</h2></li>
                                    <li>Description: {item.description}</li>
                                    <li>${item.price}</li>
                                    <li>Category: {item.category}</li>
                                    <li>Location: {item.location}</li>
                                </ul>
                                <button onClick={() => props.history.push(`/`)}>Edit item</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>)
    }
    else {
        return "Loading..."
    }


}


export default UserPage;