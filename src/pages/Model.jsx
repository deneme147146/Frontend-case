/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import '../style/Model.css'
import ProductService from '../services/productService'
import { useSelector } from 'react-redux'

const Model = () => {
  const [products,setProducts] = useState([])
  const [filteredProducts, setfilteredProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState([])
  const { brandsProducts} = useSelector((state) => state.product);

  useEffect(()=>{
    const productsService = new ProductService()

    productsService.getProducts().then(response=> 
      {
        setProducts(response.data)
        setfilteredProducts(response.data)
      })

     

  },[])

  const handleArama= (e) =>{
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm)
    const filtered = products.filter(product=>
      product.model.toLowerCase().includes(searchTerm))
      setfilteredProducts(filtered)
}

  return (
    <div className='all-model'>
      <p style={{color:'grey'}}>Model</p>
      <div className="model-container">
        <div className="model-card">
        <input onChange={handleArama} className='input-search-model'
        type='text'
        placeholder='Search'
        />

        {
          filteredProducts.map(product=>(
            <><div key={product.id}>
              <input type="checkbox" id={product.model} name="model" value={product.model} />
              <label htmlFor={product.model}>{product.model}</label>
            </div><br /></>
          ))
        }


        </div>
      </div>
    </div>
  )
}

export default Model