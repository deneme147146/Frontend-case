import { useEffect, useState } from 'react';
import './App.css';
import ProductService from './services/productService';

function App() {

  const [products, setProducts]=useState([]) 

  useEffect(()=>{
    let products = new ProductService()
    products.getProducts().then(response=> setProducts(response.data))
  },[])

  console.log(ProductService)
  return (
    <div className="App">

      {
        products.map((product)=>{
         return <p key={product.id}>{product.name}/ {product.id}</p>
        })
      }
      
    </div>
  );
}

export default App;
