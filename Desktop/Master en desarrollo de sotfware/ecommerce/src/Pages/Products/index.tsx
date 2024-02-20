import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { productContext } from '../../Context/Products';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log("ID del producto:", id); 
  const products = useContext(productContext);

  // Buscar el producto con el ID especificado en los parámetros de la URL
  const product = products.find(product => product.id === id);
console.log(product);
  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  // Renderizar los detalles del producto
  return (
    <div>
      <h2>{product.Name}</h2>
      <p>{product.description}</p>
      <p>Precio: {product.price}</p>
      <img src={product.image} alt={product.Name} />
    </div>
  );
};

export default ProductDetail;



