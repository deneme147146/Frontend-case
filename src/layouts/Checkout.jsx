import React from 'react'
import '../style/Checkout.css'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const Checkout = () => {

  const dispatch = useDispatch()
  const {cartItems} = useSelector(state=> state.cart)

  const calculateTotalPrice = () => {
    return cartItems.reduce((totalPrice, cartItem) => {
      return totalPrice + cartItem.product.price * cartItem.quantity;
    }, 0);
  };

  const toastMessage = () =>{
    toast.error("Hata: Ödeme yöntemi seçmediniz!!")
  }

  return (
    <div>
      <div className='checkout-container'>
        <div className='checkout-cart'>
          
      <div className='price-container'>

        <span>Total price: </span><span className='sepet-toplam'>{calculateTotalPrice()} ₺</span>
       

      </div>
      <br></br>

      <div className='checkout-btn'>
        <button  onClick={()=>toastMessage()} className='btn-check'>Checkout</button>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Checkout