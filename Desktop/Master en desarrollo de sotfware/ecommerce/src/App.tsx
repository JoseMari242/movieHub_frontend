import React, { useState } from 'react';
import './App.css';
import Login from './Pages/Log in';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <div className="login">
        <Login onLoginSuccess={handleLoginSuccess} />
      </div>
    </div>
  );
}

export default App;

