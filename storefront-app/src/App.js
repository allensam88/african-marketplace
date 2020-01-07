import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";
import './App.css';
import PostItems from './components/postItems';
import PutItems from './components/putitems';

function App() {
  return (
    <Router>
    <div className="App">
      <h1>App deployed!</h1>
      <PrivateRoute path="/PutItems" component={PutItems}/>
    </div>
    </Router> 
  );
}

export default App;
