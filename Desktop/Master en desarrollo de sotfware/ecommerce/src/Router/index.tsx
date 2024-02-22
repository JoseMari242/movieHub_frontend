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

/*import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../Pages/Log in';
import Home from '../Pages/Home';
import ProductDetail from '../Pages/Products';
import { ProductProvider } from '../Context/Products';
import { UserProvider } from '../Context/Users';



const appRouter: React.FC = () => {
    return (
        <BrowserRouter>
            
            
            <ProductProvider> 
                <Routes>
                
                    <Route path='/' element={<Login onLoginSuccess={() => {}} />} />
                    <Route path="/home" element={<Home />} />
                    
                    <Route path="/:id" element={<ProductDetail />} />
                    
                </Routes>
              </ProductProvider>
              
        </BrowserRouter>
    );
}

export default appRouter;*/

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../Pages/Log in';
import Home from '../Pages/Home';
import ProductDetail from '../Pages/Products';
import { ProductProvider } from '../Context/Products';



const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            
                <ProductProvider>
                    <Routes>
                        <Route path='/' element={<Login onLoginSuccess={() => {}} />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/:id" element={<ProductDetail />} />
                    </Routes>
                </ProductProvider>
            
        </BrowserRouter>
    );
}

export default AppRouter;





