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
                <button className="edit-buttons" onClick={() => props.history.push(`/postItems`)}>Add item</button>
                <button className="edit-buttons" onClick={() => props.history.push(`/users/${id}`)}>Edit User</button>
                <div className="user-item-wrapper">
                    {profile.items.map(item => {
                        return (
                            <div className="user-item">
                                <img src={item.itemImg} className="user-profile-item-img" />
                                <ul>
                                    <li><h2 className="item-title">{item.name}</h2></li>
                                    <li className="price-li">${item.price}</li>
                                    <li className="align-left"><h3 className="subtitle">Description:</h3> {item.description}</li>
                                    <li className="align-left"><h3 className="subtitle">Category:</h3> {item.category}</li>
                                    <li className="align-left"><h3 className="subtitle">Location:</h3> {item.location}</li>
                                </ul>
                                <button className="edit-buttons" onClick={() => props.history.push(`/`)}>Edit item</button>
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