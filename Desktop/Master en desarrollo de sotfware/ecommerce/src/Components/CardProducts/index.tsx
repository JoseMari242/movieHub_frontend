import React from 'react';
import '/.cardProducts.css';
import { Products } from '../../Interfaces/products';

interface CardProductProps {
    product: Products
}

const CardProduct: React.FC<CardProductProps> = ({ product }) => {
  return (
    <div className="cardContainer">
      <img src={product.image} alt={product.Name} />
      <h3>{product.Name}</h3>
      <p>{product.description}</p>
    </div>
  );
};

export default CardProduct;
