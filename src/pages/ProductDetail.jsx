import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductService from '../services/productService';
import "../style/ProductDetail.css"
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/actions/cartActions';
import { addLocalStorage } from '../helper/LocalStorageHelper';
import { Commet } from 'react-loading-indicators';

const ProductDetail = () => {
    let {id} = useParams()

    const dispatch = useDispatch()

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true); 
    const { products, error } = useSelector((state) => state.product);

    useEffect(()=>{

      try {
        let productDetail = new ProductService()
        productDetail.getByProductId(id).then(response=>setProduct(response.data))
        setLoading(false)
      } catch (error) {
        setLoading(true);
      }
  },[id])

  if (loading) {
    return <div>loading.. <Commet color="#4753fc" size="medium" text="" textColor="" /></div>;
   }else if(!product){
    return <div style={{textAlign:'center', justifyContent:'center', color:'blue'}}>Ürün yükleniyor...</div>;
   }

   const handleAddToCart =(product) =>{
   
    addLocalStorage(product)
    dispatch(addToCart(product))
   }


  return (
    <div className='detail-container'>

      <div className='detail-card'>
        <div className='left'>
        <img className= "detail-img" src={product.image} />
        </div>
  
       
      <div className='right'>
       {product.name}
      
      <p className="detail-price">{product.price} ₺</p> 
      <button onClick={() => handleAddToCart(product)} className="detail-btn">Add to Cart</button>
      {product.description}
      </div>
      </div>
    
    </div>
  )
}


export default ProductDetail