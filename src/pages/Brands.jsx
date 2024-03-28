import React, { useEffect, useState } from 'react'
import '../style/Brands.css'
import ProductService from '../services/productService'
import { useDispatch } from 'react-redux';
import { brandsList } from '../store/actions/productActions';

const Brands = () => {


  const dispatch = useDispatch();


  const [products,setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(()=>{
    const productsService = new ProductService()

    productsService.getProducts().then(response=>
      {
         setProducts(response.data)
        setFilteredProducts(response.data)})
  },[])

  const handleSearch =(e) =>{
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm)
    const filtered = products.filter(product=> 
      product.brand.toLowerCase().includes(searchTerm))

      setFilteredProducts(filtered)
  }

  const handleBrands = ()=> {


    dispatch(brandsList(products.brand))
  }
  
  return (
    <div className='all-brands'>
      <p style={{color:'grey'}}>Brands</p>
      <div className="brands-container">
        <div className="brands-card">
        <input onChange={handleSearch} className='input-search'
        type='text'
        placeholder='Search'
        />

        {
          filteredProducts.map(product=> (
            <><div key={product.id}>
              <input type="checkbox"  id={product.brand} name="brands" value={product.brand} onChange={handleBrands} />
              <label htmlFor={product.brand}>{product.brand}</label>
            </div><br /></>
          ))
        }
       
          
        </div>
      </div>
    </div>
  )
}

export default Brands