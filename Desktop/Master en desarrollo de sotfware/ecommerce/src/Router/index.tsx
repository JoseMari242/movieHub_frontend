import React, { useState } from 'react'
import Header from '../Components/Header'
import Login from '../Pages/Log in'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';

type Props = {}

export default function AppRouter({}: Props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };


  return (
    
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login onLoginSuccess={() => handleLoginSuccess()} />} />


    <Route path="/home" element={<Home />} />
   
    </Routes>
    </BrowserRouter>
    
  )
}

