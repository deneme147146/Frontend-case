import React, { useEffect, useState } from 'react'
import '../style/CartList.css'

import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteToCart } from '../store/actions/cartActions'
import ProductService from '../services/productService'
import { fetchProducts } from '../store/thunk'
import { addLocalStorage, getFromLocalStorage, getTotalPrice, removeFromLocalStorage } from '../helper/LocalStorageHelper'
import { localProduct } from '../store/actions/localActions'

const CartList = () => {
  const { products, loading, error } = useSelector((state) => state.product);

 
  const [productLocalStorage,setProductLocalStorage] = useState() //değiş
  const [priceLocalStorage,setPriceLocalStorage] = useState() //değiş

  const [isLocalStorageLoaded, setIsLocalStorageLoaded] = useState(false);
  const dispatch = useDispatch()

  // const total = getTotalPrice();


  // console.log("toplam fiat", total)



  const {cartItems} = useSelector(state=> state.cart)

  const handleAddToCart = (product) =>{

    //dispatch(localProduct(product))
    dispatch(addToCart(product))
    addLocalStorage(product)
  }




  useEffect(() => {
    const fetchData = async () => {
      const data = await getFromLocalStorage();
      console.log("DATA",data)
      setProductLocalStorage(data);
    
    };
    fetchData();
  }, []);






 
 
  const handleDeleteToCart= (product) =>{
      dispatch(deleteToCart(product))
      removeFromLocalStorage(product)

  }

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

 
console.log("cartitems",cartItems)

const data = getFromLocalStorage()

console.log("productLocalStorage" , productLocalStorage)




  return (
    <div>
      <div className='cart-container'>
        <div className='cartlist-card'>
          

          {
            // varsa döndür yoksa hata verme demek
      productLocalStorage && productLocalStorage.map((cartItem) => 
       //cartItems.map((cartItem) => 
            <><div key={cartItem?.product?.id}>
                <p className='marka-name' style={{ display: 'inline' }}>{cartItem?.product?.name}</p>
                <button onClick={() => handleAddToCart(cartItem?.product)} className='btnn'>+</button>
                <button className='cart-value-btn , btnn'>{cartItem?.quantity}</button>
                <button onClick={() => handleDeleteToCart(cartItem?.product)} className='btnn'>-</button>
              </div><div>
                  <p className='price'>{cartItem?.product?.price * cartItem?.quantity} ₺</p>
                </div></>
            
            )
          }

           
        </div>

      </div>
    </div>
  )
}

export default CartList