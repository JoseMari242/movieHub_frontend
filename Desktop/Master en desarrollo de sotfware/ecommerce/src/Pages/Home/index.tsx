/*import React from 'react'
import Header from '../../Components/Header'

type Props = {}

export default function Home({}: Props) {
  return (
    <div>
      
      <h1>HOLA, SOY HOME</h1>

      
      
    </div>
  )
}*/

/*import React, { useEffect, useState } from 'react';
import { Products } from '../../Interfaces/products';



const [productData, setProductData] = useState([] as Products[]);



async function getProductsApi() {
  try {
  const data = await fetch ('src/assets/Data/products.json');
  const JSONdata = await data.json();
    setProductData(JSONdata);

} catch (error) {
  console.log(error)
}
}


useEffect(() => {getProductsApi()}, []);

export default function Home() {
  
  return (
    <>
    <div>
      {productData.map((products) => {
        
      })}
      
    </div>
    </>
  );
}*/

import React, { useEffect, useState } from 'react';
import { Products } from '../../Interfaces/products';
import { Link } from 'react-router-dom';

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
               <Link to={`/product/${product.id}`}>
              <h2>{product.Name}</h2>
              <p>{product.description}</p>
              <p>Precio: {product.price}</p>
              <img src={product.image} alt={product.Name} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}



