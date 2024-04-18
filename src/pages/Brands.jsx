import React, { useEffect, useState } from 'react'
import '../style/Brands.css'
import ProductService from '../services/productService'
import { useDispatch, useSelector } from 'react-redux';
import { brandsList } from '../store/actions/productActions';

const Brands = () => {


  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.product);
  const [productss,setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedBrands, setSelectedBrands] = useState([]);

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
    const filtered = productss.filter(product=> 
      product.brand.toLowerCase().includes(searchTerm))

      setFilteredProducts(filtered)
  }

  const handleBrandChange = (e) => {
    const brand = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      dispatch(brandsList(brand));
    }
    
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
              <input type="checkbox"  id={product.brand} name="brands" value={product.brand}   onChange={handleBrandChange} />
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