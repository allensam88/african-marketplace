import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import LoginForm from './components/login';
import RegisterForm from './components/register';
import ItemList from './components/LandingPage';

axios.defaults.headers.common.authorization = localStorage.getItem('auth-token');

function App() {
  return (
    <div id="App">
      <Router>
        <Switch>
          <Route path="/auth">
            <div id="auth-container">
              <Switch>
                <Route path="/auth/login" exact>
                  <LoginForm/>
                </Route>
                <Route path="/auth/register" exact>
                  <RegisterForm/>
                </Route>
              </Switch>
            </div>
          </Route>
          <Route path="/items">
            <ItemList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;