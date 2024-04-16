import React, { useState } from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { TfiBag } from "react-icons/tfi";
import '../style/Wallet.css'
import { useDispatch, useSelector } from 'react-redux';
import { getTotalPrice } from '../helper/LocalStorageHelper';
import { logout } from '../firebase';
import { logout as handlerLogout } from '../store/actions/authActions';




const Wallet = () => {
   let name= "giriş yapınız!"
  let a = 'giriş yapınız!'
  let cikisButon= false
 
  const {user } = useSelector(state => state.auth)
  //console.log('user',user.user.email);

  if(user){
    name=user._tokenResponse.displayName
    let email = user.user.email
    const atIndex = email.indexOf("@");
    cikisButon=true
    a= email.slice(0, atIndex);
  }

  
  

  const dispatch = useDispatch()
  const {cartItems} = useSelector(state=> state.cart)


  const total = getTotalPrice();
  let b = total

  if(!user){
    b=0
  }

  console.log("toplam fiat", total)


  const calculateTotalPrice = () => {
    return cartItems.reduce((totalPrice, cartItem) => {
      return totalPrice + cartItem.product.price * cartItem.quantity;
    }, 0);
  };

  const handleSignOut = async () =>{
    await logout()
    dispatch(handlerLogout())
    console.log()
    window.location.reload();
  }
  

  return (
    
    <div className="wallet-container">
      
    <TfiBag />
    <div className="wallet-balance">{''} {b}₺</div>
    <div className="wallet-user">
      <IoPersonOutline />
           {''}  { name}
           <div>
            {cikisButon && <button onClick={handleSignOut}>Çıkış yap</button>}
            </div>          
           </div>
    </div>
  )
}

export default Wallet