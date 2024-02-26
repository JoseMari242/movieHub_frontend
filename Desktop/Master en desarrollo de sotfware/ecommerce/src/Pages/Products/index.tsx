/*import React, { useContext } from 'react';   ESTE CODIGO FUNCIONA
import { Link, useParams } from 'react-router-dom';
import { productContext } from '../../Context/Products';
import './products.css' 


const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const products = useContext(productContext);

  // Buscar el producto con el ID especificado en los parámetros de la URL
  const product = products.find(product => product.id === id);
console.log(product);
  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  // Renderizar los detalles del producto
  return (
    <>
    <div className='card-products'>
      <h2>{product.Name}</h2>
      <div className='card'>
      <img src={product.image} alt={product.Name} />
      <p>{product.description}</p>
      <p>Precio: {product.price}</p>
      </div>
    </div>
    <Link to={`/cart`}>
    <button className='button-buy'>Buy!</button></Link>
    
    </>
  );
};

export default ProductDetail;*/

import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { productContext } from '../../Context/Products';
import './products.css';
import { useCart } from '../../Components/useCart';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

// Interfaz para un solo producto
interface Product {
  id: string;
  Name: string;
  price: number; // Corregido a number para que coincida con la estructura de los productos
  image: string;
  description: string;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const products = useContext(productContext);
  const { addToCart } = useCart();

  // Buscar el producto con el ID especificado en los parámetros de la URL
  const product = products.find((product) => product.id === id) as unknown as Product; // Añade la aserción de tipo para asegurarte de que product tenga el tipo correcto
  
  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  // Renderizar los detalles del producto
  return (
    <>
    <Header />
      <div className='card-products'>
        <h2>{product.Name}</h2>
        <div className='card'>
          <img src={product.image} alt={product.Name} />
          <p>{product.description}</p>
          <p>Precio: {product.price}</p>
        </div>
      </div>
      <Link to={`/cart`}>
        <button onClick={() => addToCart(product)}>Buy!</button>
      </Link>
      <Footer />
    </>
  );
};

export default ProductDetail;


