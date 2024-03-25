import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductService from '../services/productService';

const ProductDetail = () => {
    let {id} = useParams()

    const [product, setProduct] = useState(null);

    useEffect(()=>{
      let productDetail = new ProductService()
      productDetail.getByProductId(id).then(response=>setProduct(response.data))

  },[id])
  return (
    <div>
      Merhaba 
     
    </div>
  )
}

export default ProductDetail