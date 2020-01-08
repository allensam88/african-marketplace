import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import EditUser from './components/EditUser';
import PrivateRoute from './utils/PrivateRoute';
import AuthRoute from './utils/AuthRoute';
import './App.css';
import LoginForm from './components/Login';
import RegisterForm from './components/Register';
import ItemList from './components/LandingPage';

function App() {
  return (
    <div id="App">
      <Switch>
        <AuthRoute path="/auth" component={() => (
          <Switch>
            <Route path="/auth/login" exact>
              <LoginForm/>
            </Route>
            <Route path="/auth/register" exact>
              <RegisterForm/>
            </Route>
            <Redirect to="/auth/login" />
          </Switch>
        )}>
        </AuthRoute>
        <PrivateRoute path="/users/:id" component={EditUser} /> 
        <PrivateRoute path="/items" component={ItemList} />
        <Redirect to="/auth/login" />
      </Switch>
    </div>
  );
}

export default App;