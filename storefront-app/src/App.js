import React from 'react';
import EditUser from './components/EditUser';
import AllieLogin from './components/AllieLogin';
import AllieRegister from './components/AllieRegister';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>App deployed!</h1>
      <EditUser />
      <AllieLogin />
      <AllieRegister />
    </div>
  );
}

export default App;
