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
      <UserIdContext.Provider value={{userId}}>
      <NavBar />
      <Switch>
        <PrivateRoute path="/userprofile" component={UserPage} />
        <PrivateRoute path="/users/:id" component={EditUser} /> 
        <Route exact path="/" component={ItemList} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
        <Route path="/postItems" component={PostItems} />
        <Redirect to="/login" component={LoginForm} />
      </Switch>
      </UserIdContext.Provider>
    </div>
  );
}

export default App;