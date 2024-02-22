import React, { useEffect, useState } from 'react';
import { Products } from '../../Interfaces/products';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import './home.css'


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
    <Header/>
    <h2>WATCHES SEASON 2024</h2>
      <div className='card-product'>
        {productData.map((product) => {
          
          return (
            
            <div className='card' key={product.id}>
               <Link to={`/${product.id}`}>
              <h2>{product.Name}</h2></Link>
              <p>{product.description}</p>
              <p>Precio: {product.price}</p>
              <img src={product.image} alt={product.Name} />
            </div>
            
          );
        })}
      </div>
      <button className='button-load-more'>Load more</button>
    </>
  );
}