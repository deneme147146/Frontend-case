import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { TfiBag } from "react-icons/tfi";
import '../style/Wallet.css'
import { useDispatch, useSelector } from 'react-redux';
import { getTotalPrice } from '../helper/LocalStorageHelper';



const Wallet = () => {

  const dispatch = useDispatch()
  const {cartItems} = useSelector(state=> state.cart)


  const total = getTotalPrice();


  console.log("toplam fiat", total)


  const calculateTotalPrice = () => {
    return cartItems.reduce((totalPrice, cartItem) => {
      return totalPrice + cartItem.product.price * cartItem.quantity;
    }, 0);
  };
  return (
    
    <div className="wallet-container">
      
    <TfiBag />
    <div className="wallet-balance">{''} {total}₺</div>
    <div className="wallet-user">
      <IoPersonOutline />
           {''}  Hüseyin</div>
    </div>
  )
}

export default Wallet