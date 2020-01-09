import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';


const UserPage = (props) => {

    const getUser = () => {
        axiosWithAuth()
        .get(`/users/${localStorage.getItem('id')}/items`)
    }

    return "yo"
}


export default UserPage;