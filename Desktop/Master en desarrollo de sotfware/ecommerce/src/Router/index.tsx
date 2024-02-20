/*import React, { useState } from 'react'
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
}*/

/*import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../Pages/Log in';
import Home from '../Pages/Home';
import ProductsDetail from '../Pages/Products';


const AppRouter: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login onLoginSuccess={handleLoginSuccess} />} />
                <Route path="/home" element={<Home />} />
                
                <Route path="/product/:productId" element={< ProductsDetail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;*/

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../Pages/Log in';
import Home from '../Pages/Home';
import ProductDetail from '../Pages/Products';
import { ProductProvider } from '../Context/Products';


const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            {/* Envuelve las rutas con el proveedor del contexto */}
            <ProductProvider>
                <Routes>
                    <Route path='/' element={<Login onLoginSuccess={() => {}} />} />
                    <Route path="/home" element={<Home />} />
                    {/* Agrega una nueva ruta para manejar los detalles del producto */}
                    <Route path="/product/:id" element={<ProductDetail />} />
                </Routes>
              </ProductProvider>
        </BrowserRouter>
    );
}

export default AppRouter;




