import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import UserIdContext from './contexts/UserIdContext';
import EditUser from './components/EditUser';
import PrivateRoute from './utils/PrivateRoute';
import LoginForm from './components/Login';
import RegisterForm from './components/Register';
import ItemList from './components/LandingPage';
import NavBar from './components/NavBar';
import PostItems from './components/postItems';
import MarketPlace from './components/MarketPlace';
import UserPage from './components/UserPage';
import './App.css';


function App() {

	const userId = localStorage.getItem('id')

	return (
		<div id="App">
			<Route exact path="/" component={LoginForm} />
			<Redirect to="/" component={LoginForm} />
			<Route path="/register" component={RegisterForm} />
			<UserIdContext.Provider value={{ userId }}>
				<NavBar />
				<Switch>
					<PrivateRoute path="/userprofile" component={UserPage} />
					<PrivateRoute path="/users/:id" component={EditUser} />
					<PrivateRoute path="/items" component={ItemList} />
					<Route path="/postItems" component={PostItems} />
				</Switch>
			</UserIdContext.Provider>
		</div>
	);
}

export default App;