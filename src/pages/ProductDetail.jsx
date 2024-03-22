import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductService from '../services/productService';

const ProductDetail = () => {
    let {id,name} = useParams()

    const [product, setProduct] = useState([]);

    useEffect(()=>{
      let productDetail = new ProductService()
      productDetail.getByProductId(id).then(response=>setProduct(response.data))
  },[id])
  return (
    <div>
      <div>
      deneme: {product.name}
      </div>
     
    </div>
  )
}

export default ProductDetail