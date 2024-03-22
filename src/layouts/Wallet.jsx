import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { TfiBag } from "react-icons/tfi";
import '../style/Wallet.css'
import { useDispatch, useSelector } from 'react-redux';



const Wallet = () => {

  const dispatch = useDispatch()
  const {cartItems} = useSelector(state=> state.cart)


  const calculateTotalPrice = () => {
    return cartItems.reduce((totalPrice, cartItem) => {
      return totalPrice + cartItem.product.price * cartItem.quantity;
    }, 0);
  };
  return (
    
    <div className="wallet-container">
      
    <TfiBag />
    <div className="wallet-balance">{''} {calculateTotalPrice()}₺</div>
    <div className="wallet-user">
      <IoPersonOutline />
           {''}  Hüseyin</div>
    </div>
  )
}

export default Wallet