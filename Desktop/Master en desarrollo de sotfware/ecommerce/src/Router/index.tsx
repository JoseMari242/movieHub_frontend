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

/*import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../Pages/Log in';
import Home from '../Pages/Home';
import ProductDetail from '../Pages/Products';
import { ProductProvider } from '../Context/Products';
import { AuthProvider } from '../Context/AuthContext';
import ProtectedRoutes from '../Components/ProtectedRoutes';
import cart from '../Pages/Cart/cart';





const AppRouter: React.FC = () => {
    return (
        
        <AuthProvider>
        <BrowserRouter>
            
                <ProductProvider>
                    <Routes>
                    <Route path='/' element={<Login onLoginSuccess={() => {}} />} />
                        <Route path="/home" element={<ProtectedRoutes component={Home}/>} />
                        <Route path="/:id" element={<ProtectedRoutes component={ProductDetail} />} />
                        <Route path="/cart" element={<ProtectedRoutes component={cart} />} />
                    </Routes>
                </ProductProvider>
                
        </BrowserRouter>
        </AuthProvider>
       
    );
}

export default AppRouter;*/

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../Context/AuthContext';
import { ProductProvider } from '../Context/Products';
import { CartContextProvider } from '../Context/CartContext'; // Importa el proveedor del contexto del carrito
import Login from '../Pages/Log in';
import Home from '../Pages/Home';
import ProductDetail from '../Pages/Products'; // Cambiado desde '../Pages/Products'
import ProtectedRoutes from '../Components/ProtectedRoutes';
import Cart from '../Pages/Cart/cart';

const AppRouter: React.FC = () => {
    return (
        <AuthProvider>
            <CartContextProvider> {/* Envuelve tu aplicación con el proveedor del contexto del carrito */}
                <BrowserRouter>
                    <ProductProvider>
                        <Routes>
                            <Route path='/' element={<Login onLoginSuccess={() => {}} />} />
                            <Route path="/home" element={<ProtectedRoutes component={Home}/>} />
                            <Route path="/:id" element={<ProtectedRoutes component={ProductDetail} />} /> {/* Cambiado a "/product/:id" */}
                            <Route path="/cart" element={<ProtectedRoutes component={Cart} />} />
                        </Routes>
                    </ProductProvider>
                </BrowserRouter>
            </CartContextProvider>
        </AuthProvider>
    );
}

export default AppRouter;






