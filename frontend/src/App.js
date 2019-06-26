import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Login from './components/Login';


function App() {
  const auth = window.localStorage.getItem('auth')
  return (
    <div className="App">
      { auth ? (
        <Main></Main>
      ) : (
        <Login></Login>
      ) }
    </div>
  );
}

export default App;
