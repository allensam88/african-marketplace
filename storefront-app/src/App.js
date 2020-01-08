import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import EditUser from './components/EditUser';
import PrivateRoute from './utils/PrivateRoute';
import AuthRoute from './utils/AuthRoute';
import LoginForm from './components/Login';
import RegisterForm from './components/Register';
import ItemList from './components/LandingPage';
import PostItems from './components/postItems';
import MarketPlace from './components/MarketPlace'; 

import './App.css';

function App() {
  return (
    <div id="App">
      <Switch>
        <PrivateRoute path="/users/:id" component={EditUser} /> 
        <Route exact path="/" component={ItemList} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
        <Route path="/postItems" component={PostItems}/>
        <Route path="/MarketPlace" component={MarketPlace}/>
        <Redirect to="/login" component={LoginForm} />
      </Switch>
    </div>
  );
}

export default App;