import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {


  const [products, setProducts] = useState([]);

  async function getProducts() {
    const res = await axios.get("http://localhost:5000/products")
    const products = res.data.data;
    console.log(products);
    setProducts(products)
  }

  useEffect(() => {
    getProducts()
  }, []);


  return (
    <>
    <div className="container">
    <h1 className='main__title'>Products</h1>
      <div className="wrapper">
          <div className="products__card">
          {products.map((product) => (
            <div className='card'>
              <img src={product.image} alt="" />
              <p className='main__info'>
                <span className='product__name'>{product.name}</span>
                <span className='product__price'>${product.price}</span>
              </p>
              <p>{product.description}</p>
            </div>
          )
          )}
          </div>
      </div>
    </div>
    </>
  )
}

export default App
