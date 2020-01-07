import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const EditUser = () => {

    const id = 0;

    useEffect(() => {
        axiosWithAuth()
        .get(`/users`)
        .then(res => console.log(res.data))
    }, [])

    return <form>
        <input
            placeholder="Username" />
        <input
            placeholder="Password" />
    </form>
}

export default EditUser;