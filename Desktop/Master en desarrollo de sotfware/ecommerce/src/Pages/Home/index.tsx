/*import React, { useEffect, useState } from 'react';
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
    
    <h2 className='title'>WATCHES SEASON 2024</h2>
    
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
}*/

import React, { useEffect, useState } from 'react';
import { Products } from '../../Interfaces/products';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import './home.css';

export default function Home() {
  const [productData, setProductData] = useState<Products[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<Products[]>([]);
  const [loadedAllProducts, setLoadedAllProducts] = useState(false);

  useEffect(() => {
    getProductsApi();
  }, []);

  useEffect(() => {
    if (productData.length > 0) {
      // Mostrar solo los primeros 2 productos al cargar la página
      setVisibleProducts(productData.slice(0, 2));
    }
  }, [productData]);

  async function getProductsApi() {
    try {
      const data = await fetch('src/assets/Data/products.json');
      const JSONdata = await data.json();
      setProductData(JSONdata);
    } catch (error) {
      console.log(error);
    }
  }

  const handleLoadMore = () => {
    if (productData.length > visibleProducts.length) {
      // Mostrar los productos restantes al hacer clic en el botón "Load more"
      const remainingProducts = productData.slice(
        visibleProducts.length,
        visibleProducts.length + 4
      );
      setVisibleProducts([...visibleProducts, ...remainingProducts]);

      // Verificar si se han cargado todos los productos
      if (visibleProducts.length + 4 >= productData.length) {
        setLoadedAllProducts(true);
      }
    } else {
      setLoadedAllProducts(true);
    }
  };

  return (
    <>
      <Header />
      <h2 className='title'>WATCHES SEASON 2024</h2>
      <div className='card-product'>
        {visibleProducts.map((product) => (
          <div className='card' key={product.id}>
            <Link to={`/${product.id}`}>
              <h2>{product.Name}</h2>
            </Link>
            {/*<p>{product.description}</p>
            <p>Precio: {product.price}</p> */}
            <img src={product.image} alt={product.Name} />
          </div>
        ))}
      </div>
      {!loadedAllProducts && (
        <button className='button-load-more' onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </>
  );
}
