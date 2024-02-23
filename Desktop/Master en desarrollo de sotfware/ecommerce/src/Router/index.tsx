/*import React from 'react';
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

export default AppRouter;*/

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../Pages/Log in';
import Home from '../Pages/Home';
import ProductDetail from '../Pages/Products';
import { ProductProvider } from '../Context/Products';
import { AuthProvider } from '../Context/AuthContext';
import ProtectedRoutes from '../Components/ProtectedRoutes';




const AppRouter: React.FC = () => {
    return (
        <AuthProvider>
        <BrowserRouter>
            
                <ProductProvider>
                    <Routes>
                    <Route path='/' element={<Login onLoginSuccess={() => {}} />} />
                        <Route path="/home" element={<ProtectedRoutes component={Home}/>} />
                        <Route path="/:id" element={<ProtectedRoutes component={ProductDetail} />} />
                    </Routes>
                </ProductProvider>
                
        </BrowserRouter>
        </AuthProvider>
    );
}

export default AppRouter;





