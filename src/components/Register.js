import React, { useState } from "react";
import axiosWithAuth from '../utils/axiosWithAuth';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import StyledButton from "./Button";
import AuthContainer from "./AuthContainer";

const RegisterForm = props => {
	let history = useHistory();

	const [user, setUser] = useState({
		username: "",
		password: ""
	});

	const handleChanges = event => {
		setUser({
			...user,
			[event.target.name]: event.target.value
		});
	};
	const submitForm = event => {
		event.preventDefault()
		axiosWithAuth()
			.post('/api/register', {
				username: user.username,
				password: user.password
			})
			.then(function (response) {
				history.push("/auth/login");
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<AuthContainer>
			<form className="login-form" onSubmit={submitForm}>
				<img className="logo" alt="logo" src={require('./logo.png')} />
				<fieldset>
					<legend>Create Account</legend>
					<label className="login-label" htmlFor="username">Username</label>
					<input className="login-input" id="username"
						type="text"
						name="username"
						placeholder="Enter Username"
						onChange={handleChanges}
						value={user.username} />
					<label className="login-label" htmlFor="password">Password</label>
					<input className="login-input" id="password"
						type="password"
						name="password"
						placeholder="Enter Password"
						onChange={handleChanges}
						value={user.password} />
				</fieldset>
				<StyledButton type="submit">Create Account</StyledButton>
				<Link className="form-button" to="/auth/login">
					<StyledButton renderas="button">
						Already have an Account?
                </StyledButton>
				</Link>
			</form>
		</AuthContainer>
	)
};

export default RegisterForm;