import React, { useEffect, useState } from 'react';
import { Products } from '../../Interfaces/products';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';

export default function Home() {
  const [productData, setProductData] = useState<Products[]>([]);

  async function getProductsApi() {
    try {
      const data = await fetch ('src/assets/Data/products.json');
      const JSONdata = await data.json();
      setProductData(JSONdata);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProductsApi();
  }, []);

  return (
    <>
      <div>
        {productData.map((product) => {
          
          return (
            
            <div key={product.id}>
               <Link to={`/${product.id}`}>
              <h2>{product.Name}</h2></Link>
              <p>{product.description}</p>
              <p>Precio: {product.price}</p>
              <img src={product.image} alt={product.Name} />
            </div>
            
          );
        })}
      </div>
    </>
  );
}