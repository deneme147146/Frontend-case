import React, { useEffect, useState } from 'react'
import '../style/CartList.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteToCart } from '../store/actions/cartActions'
import ProductService from '../services/productService'

const CartList = () => {
  const [products,setProducts] = useState([])

  const dispatch = useDispatch()

  const {cartItems} = useSelector(state=> state.cart)

  const handleAddToCart = (product) =>{

    dispatch(addToCart(product))

  }

  const handleDeleteToCart= (product) =>{
      dispatch(deleteToCart(product))
  }


  useEffect(()=>{
    const productsService = new ProductService()

    productsService.getProducts().then(response=> setProducts(response.data))
  },[])


  return (
    <div>
      <div className='cart-container'>
        <div className='cartlist-card'>

          {
            cartItems.map((cartItem) => 
            
            <><div key={cartItem.product.id}>
                <p className='marka-name' style={{ display: 'inline' }}>{cartItem.product.name}</p>
                <button onClick={() => handleAddToCart(cartItem.product)} className='btnn'>+</button>
                <button className='cart-value-btn , btnn'>{cartItem.quantity}</button>
                <button onClick={() => handleDeleteToCart(cartItem.product)} className='btnn'>-</button>
              </div><div>
                  <p className='price'>{cartItem.product.price * cartItem.quantity} ₺</p>
                </div></>
            
            )
          }

           
        </div>

      </div>
    </div>
  )
}

export default CartList