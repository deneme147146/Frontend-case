import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductService from '../services/productService';
import "../style/ProductDetail.css"
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/actions/cartActions';
import { addLocalStorage } from '../helper/LocalStorageHelper';
import { Commet } from 'react-loading-indicators';
import { CircularProgress, LinearProgress } from '@mui/material';
import { localProducts } from '../store/actions/localActions';

const ProductDetail = () => {
    let {id} = useParams()
    const {user } = useSelector(state => state.auth)
    let email = user.user.email
    const dispatch = useDispatch()

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true); 
    const { products, error } = useSelector((state) => state.product);

    const { localProduct} = useSelector((state) => state.local);


    useEffect(()=>{

      try {
        let productDetail = new ProductService()
        console.log("productDetail",productDetail)
        productDetail.getByProductId(id).then(response=>setProduct(response.data))
        setLoading(false)
      } catch (error) {
        setLoading(true);
      }

      //sayfaya logla test
  },[id])
 // console.log("product",product)
  if (loading) {
    return 
   }else if(!product){
    return <div style={{ paddingTop:100, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'blue' }}>ürün <CircularProgress disableShrink /></div>
     
    //<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'blue' }}><CircularProgress disableShrink /></div>;
   }

   const handleAddToCart =(product) =>{
   
    addLocalStorage({email: email, product: product})
    //dispatch(addToCart(product))
    dispatch(addToCart(product))
   
    dispatch(localProducts(email,product))
   }

  


  return (
    <div data-testid="product-detail" className='detail-container'>

      <div className='detail-card'>
        <div className='left'>
        <img className= "detail-img" src={product.image} />
        </div>
  
       
      <div className='right'>
       {product.name}
      <p className="detail-price">{product.price} ₺</p> 
      <button id="test-add-to-cart-btn" onClick={() => handleAddToCart(product)} className="detail-btn">Add to Cart</button>
      {product.description}
      </div>
      </div>
    
    </div>
  )
}


export default ProductDetail