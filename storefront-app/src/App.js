import React from 'react';
import EditUser from './components/EditUser';
import AllieLogin from './components/AllieLogin';
import AllieRegister from './components/AllieRegister';
import PrivateRoute from './utils/PrivateRoute';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>App deployed!</h1>
      <PrivateRoute path="/users/:id" component={EditUser} /> 
      <Route exact path="/login" component={AllieLogin} />
      <Route exact path="/register" component={AllieRegister} />
    </div>
  );
}

export default App;
