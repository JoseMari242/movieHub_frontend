import React, { createContext, useEffect, useState } from 'react'
import { Products } from '../../Interfaces/products'




export const productContext = createContext<Products[]>([]);

export const ProductProvider = ({children}) => {
  const [products, setProducts] =  useState<Products[]>([]);


 
  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const data = await fetch('src/assets/Data/products.json');
      const JSONdata = await data.json();
      setProducts (JSONdata);
    } catch (error) {
      console.log(error);
    }
  }


  return (
   
    <productContext.Provider value={products}>
    {children}
  </productContext.Provider>


  )
}