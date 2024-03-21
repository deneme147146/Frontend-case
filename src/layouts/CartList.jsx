import React, { useEffect, useState } from 'react'
import '../style/CartList.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/actions/cartActions'
import ProductService from '../services/productService'

const CartList = () => {
  const [products,setProducts] = useState([])

  const dispatch = useDispatch()

  const {cartItems} = useSelector(state=> state.cart)

  const handleAddToCart = (product) =>{

    dispatch(addToCart(product))

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
                <button onClick={() => handleAddToCart()} className='btnn'>+</button>
                <button className='cart-value-btn , btnn'>{cartItem.quantity}</button>
                <button className='btnn'>-</button>
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