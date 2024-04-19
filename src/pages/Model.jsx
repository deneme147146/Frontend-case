/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import '../style/Model.css'
import ProductService from '../services/productService'
import { useDispatch, useSelector } from 'react-redux';
import { updateBrands as uupdateBrands } from '../store/actions/productActions';

const Model = () => {
  const dispatch = useDispatch();
  const [productss,setProducts] = useState([])
  const [filteredProducts, setfilteredProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState([])
  const { updateBrands} = useSelector((state) => state.product);
  const { originProducts, originLoading, originError} = useSelector((state) => state.product);
  const [yeniModel, setYeniModel] = useState([])
  const { products, loading, error } = useSelector((state) => state.product);

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
    const filtered = productss.filter(product=>
      product.model.toLowerCase().includes(searchTerm))
      setfilteredProducts(filtered)
}

const handleAramaYap = (e)=>{
  const searchTerm = e.target.value.toLowerCase();
  setSearchTerm(searchTerm)
  const filtered = updateBrands.filter(product =>
    product.model.trim().toLowerCase().includes(searchTerm))
    setfilteredProducts(filtered)
  

}


if(updateBrands.length === 0){
  //updateBrands = originProducts
  //updateBrands[1] = ["Lütfen marka seç"];
  //const a = "marka seç!"
  //setYeniModel(products)
  //dispatch(uupdateBrands(yeniModel))
}

console.log("MOdel redux veri",updateBrands);
console.log("MOdel filteredProducts",filteredProducts);

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
          updateBrands.map(product=>(
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