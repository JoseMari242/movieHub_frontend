import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../Context/AuthContext';
import { ProductProvider } from '../Context/Products';
import { CartContextProvider } from '../Context/CartContext'; 
import Login from '../Pages/Log in';
import Home from '../Pages/Home';
import ProductDetail from '../Pages/Products'; 
import ProtectedRoutes from '../Components/ProtectedRoutes';
import Cart from '../Pages/Cart/cart';

const AppRouter: React.FC = () => {
    return (
        <AuthProvider>
            <CartContextProvider> 
                <BrowserRouter>
                    <ProductProvider>
                        <Routes>
                            <Route path='/' element={<Login onLoginSuccess={() => {}} />} />
                            <Route path="/home" element={<ProtectedRoutes component={Home}/>} />
                            <Route path="/:id" element={<ProtectedRoutes component={ProductDetail} />} /> 
                            <Route path="/cart" element={<ProtectedRoutes component={Cart} />} />
                        </Routes>
                    </ProductProvider>
                </BrowserRouter>
            </CartContextProvider>
        </AuthProvider>
    );
}

export default AppRouter;






