import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const EditUser = (props) => {

	const [user, setUser] = useState({
		id: '',
		username: '',
		profileImg: ''
	})

	const getUser = () => {
		axiosWithAuth()
			.get(`/users/${props.match.params.id}`)
			.then(res => {
				return setUser(res.data)
			})
	}

	useEffect(() => {
		getUser()
	}, [])


	const changeHandler = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		})
	}

	const submitForm = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.put(`/users/${props.match.params.id}`, user)
			.then(props.history.push(`/userprofile/${props.match.params.id}`));
	}

	const deleteUser = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.delete(`/users/${props.match.params.id}`);
		props.history.push('/');
	}

	return (<>
		<h2 className="item-title">Edit User</h2>
		<p>Current username: {user.username}</p>
		<form onSubmit={submitForm}>
			<input
				placeholder="Username"
				name="username"
				value={user.username}
				onChange={changeHandler}
				className="edit-username-input" />
			<input
				placeholder="Image URL"
				name="profileImg"
				value={user.profileImg}
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