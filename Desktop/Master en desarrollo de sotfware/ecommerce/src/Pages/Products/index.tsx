import React, { useContext } from 'react';
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

export default ProductDetail;




