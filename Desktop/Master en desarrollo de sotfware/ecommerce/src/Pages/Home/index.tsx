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

/*import React, { useEffect, useState } from 'react'; ESTE CODIGO FUNCIONA
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
            <p>{product.description}</p>
            <p>Precio: {product.price}</p>
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
}*/

/*import React, { useEffect, useState } from 'react';
import { Products } from '../../Interfaces/products';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import { useCart } from '../../Components/useCart'; // Importa el hook useCart
import './home.css';
import Footer from '../../Components/Footer';

// Interfaz para un solo producto
interface Product {
  id: string;
  Name: string;
  price: number; // Corregido a number para que coincida con la estructura de los productos
  image: string;
  description: string;
}

export default function Home() {
  const [productData, setProductData] = useState<Products[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<Products[]>([]);
  const [loadedAllProducts, setLoadedAllProducts] = useState(false);
  const { addToCart } = useCart(); // Obtiene la función addToCart del contexto del carrito

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
            <img src={product.image} alt={product.Name} />
            <button onClick={() => addToCart(product as unknown as Product)}>Buy</button> 
          </div>
        ))}
      </div>
      {!loadedAllProducts && (
        <button className='button-load-more' onClick={handleLoadMore}>
          Load more
        </button>
      )}
      <Footer />
    </>
  );
}*/

/*import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import { useCart } from '../../Components/useCart';
import './home.css';
import Footer from '../../Components/Footer';

interface Product {
  id: string;
  Name: string;
  price: number;
  image: string;
  description: string;
}

export default function Home() {
  const [productData, setProductData] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [loadedAllProducts, setLoadedAllProducts] = useState(false);
  const { addToCart, cartItems } = useCart();

  useEffect(() => {
    getProductsApi();
  }, []);

  useEffect(() => {
    if (productData.length > 0) {
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
      const remainingProducts = productData.slice(
        visibleProducts.length,
        visibleProducts.length + 4
      );
      setVisibleProducts([...visibleProducts, ...remainingProducts]);

      if (visibleProducts.length + 4 >= productData.length) {
        setLoadedAllProducts(true);
      }
    } else {
      setLoadedAllProducts(true);
    }
  };

  // Función para verificar si un producto está en el carrito
  const isInCart = (productId: string) => {
    return cartItems.some((item) => item.product.id === productId);
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
            <img src={product.image} alt={product.Name} />
            <button
              onClick={() => addToCart(product)}
              disabled={isInCart(product.id)}
            >
              {isInCart(product.id) ? 'Added to Cart' : 'Buy'}
            </button>
          </div>
        ))}
      </div>
      {!loadedAllProducts && (
        <button className='button-load-more' onClick={handleLoadMore}>
          Load more
        </button>
      )}
      <Footer />
    </>
  );
}*/

/*import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import { useCart } from '../../Components/useCart';
import './home.css';
import Footer from '../../Components/Footer';

interface Product {
  id: string;
  Name: string;
  price: number;
  image: string;
  description: string;
}

export default function Home() {
  const [productData, setProductData] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [loadedAllProducts, setLoadedAllProducts] = useState(false);
  const { addToCart, cartItems } = useCart();

  useEffect(() => {
    getProductsApi();
  }, []);

  useEffect(() => {
    if (productData.length > 0) {
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
      const remainingProducts = productData.slice(
        visibleProducts.length,
        visibleProducts.length + 4
      );
      setVisibleProducts([...visibleProducts, ...remainingProducts]);

      if (visibleProducts.length + 4 >= productData.length) {
        setLoadedAllProducts(true);
      }
    } else {
      setLoadedAllProducts(true);
    }
  };

  // Función para verificar si un producto está en el carrito
  const isInCart = (productId: string) => {
    return cartItems.some((item) => item.product.id === productId);
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
            <img src={product.image} alt={product.Name} />
            <button
              onClick={() => addToCart(product)}
              disabled={isInCart(product.id)}
            >
              {isInCart(product.id) ? 'Added to Cart' : 'Buy'}
            </button>
          </div>
        ))}
      </div>
      {!loadedAllProducts && (
        <button className='button-load-more' onClick={handleLoadMore}>
          Load more
        </button>
      )}
      <Footer />
    </>
  );
}*/

/*import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import { useCart } from '../../Components/useCart';
import './home.css';
import Footer from '../../Components/Footer';

interface Product {
  id: string;
  Name: string;
  price: number;
  image: string;
  description: string;
}

export default function Home() {
  const [productData, setProductData] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [loadedAllProducts, setLoadedAllProducts] = useState(false);
  const { addToCart, cartItems, removeItem } = useCart(); // Agrega la función removeItem del contexto del carrito

  useEffect(() => {
    getProductsApi();
  }, []);

  useEffect(() => {
    if (productData.length > 0) {
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
      const remainingProducts = productData.slice(
        visibleProducts.length,
        visibleProducts.length + 4
      );
      setVisibleProducts([...visibleProducts, ...remainingProducts]);

      if (visibleProducts.length + 4 >= productData.length) {
        setLoadedAllProducts(true);
      }
    } else {
      setLoadedAllProducts(true);
    }
  };

  // Función para verificar si un producto está en el carrito
  const isInCart = (productId: string) => {
    return cartItems.some((item) => item.product.id === productId);
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
            <img src={product.image} alt={product.Name} />
            {isInCart(product.id) ? (
              <button onClick={() => removeItem({ product, quantity: 1 })}>Remove</button>

            ) : (
              <button onClick={() => addToCart(product)}>Buy</button>
            )}
          </div>
        ))}
      </div>
      {!loadedAllProducts && (
        <button className='button-load-more' onClick={handleLoadMore}>
          Load more
        </button>
      )}
      <Footer />
    </>
  );
}*/

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import { useCart } from '../../Components/useCart';
import './home.css';
import Footer from '../../Components/Footer';

interface Product {
  id: string;
  Name: string;
  price: number;
  image: string;
  description: string;
}

export default function Home() {
  const [productData, setProductData] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [loadedAllProducts, setLoadedAllProducts] = useState(false);
  const { addToCart, cartItems, removeItem } = useCart();

  useEffect(() => {
    getProductsApi();
  }, []);

  useEffect(() => {
    if (productData.length > 0) {
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
      const remainingProducts = productData.slice(
        visibleProducts.length,
        visibleProducts.length + 4
      );
      setVisibleProducts([...visibleProducts, ...remainingProducts]);

      if (visibleProducts.length + 4 >= productData.length) {
        setLoadedAllProducts(true);
      }
    } else {
      setLoadedAllProducts(true);
    }
  };

  const isInCart = (productId: string) => {
    return cartItems.some((item) => item.product.id === productId);
  };

  // Función para remover un producto del carrito
  const handleRemoveFromCart = (product: Product) => {
    const itemToRemove = cartItems.find((item) => item.product.id === product.id);
    if (itemToRemove) {
      removeItem(itemToRemove);
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
            <img src={product.image} alt={product.Name} />
            {isInCart(product.id) ? (
              <button onClick={() => handleRemoveFromCart(product)}>Remove</button>
            ) : (
              <button onClick={() => addToCart(product)}>Buy</button>
            )}
          </div>
        ))}
      </div>
      {!loadedAllProducts && (
        <button className='button-load-more' onClick={handleLoadMore}>
          Load more
        </button>
      )}
      <Footer />
    </>
  );
}



