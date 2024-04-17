import React, { useEffect, useState } from 'react'
import '../style/Checkout.css'

import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import { getFromLocalStorage, getTotalPrice } from '../helper/LocalStorageHelper'

const Checkout = () => {

  const {user } = useSelector(state => state.auth)
  const {cartItems} = useSelector(state=> state.cart)
  let email = "a"

 if(user){
  email = user.user.email
 }
  const [productLocalStorage,setProductLocalStorage] = useState() //değiş
  
  const total = getTotalPrice();


  console.log("toplam fiat", total)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFromLocalStorage(email);
      console.log("DATA",data)
      setProductLocalStorage(data);
    
    };
    fetchData();
  }, []);

  const calculateTotalPrice = () => {
    return cartItems.reduce((totalPrice, cartItem) => {
      return totalPrice + cartItem.product.price * cartItem.quantity;
    }, 0);
  };
  

  const ccalculateTotalPrice = () => {
    const itemPrices = productLocalStorage.map((cartItem) => cartItem.product.price * cartItem.quantity);
    return itemPrices.reduce((totalPrice, price) => totalPrice + price, 0);
  };

  const toastMessage = () =>{
    toast.error("Hata: Ödeme yöntemi seçmediniz!!")
  }

  return (
    <div>
      <div className='checkout-container'>
        <div className='checkout-cart'>
          
      <div className='price-container'>

        <span>Total price: </span><span className='sepet-toplam'>{total} ₺</span>
       

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