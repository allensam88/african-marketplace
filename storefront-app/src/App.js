import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import PostItems from './components/postItems';
import PutItems from './components/putitems';

function App() {
  return (
    <Router>
    <div className="App">
      <h1>App deployed!</h1>
      <Route path="/"/>
      <Route path="/postItems" component= {PostItems}/>
      <Route path="/putItems" component={PutItems}/>
    </div>
    </Router> 
  );
}

export default App;
