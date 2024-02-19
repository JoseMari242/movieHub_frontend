import React, { useState } from 'react';
import './App.css';
import Login from './Pages/Log in';
import Header from './Components/Header';
import { UserProvider } from './Context/Users';
import AppRouter from './Router';


function App() {
  

  return (
    <div className="App">
      <div className="login">
        <UserProvider>
          
        <AppRouter/>

          </UserProvider>
      </div>
    </div>
  );
}

export default App;

