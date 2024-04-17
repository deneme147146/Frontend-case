import React, { useEffect, useState } from 'react'
import '../style/CartList.css'

import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteToCart } from '../store/actions/cartActions'
import ProductService from '../services/productService'
import { fetchProducts } from '../store/thunk'
import { addLocalStorage, getFromLocalStorage, getTotalPrice, removeFromLocalStorage } from '../helper/LocalStorageHelper'
import { localProducts , localProductsDelete } from '../store/actions/localActions'


const CartList = () => {
  const { products, loading, error } = useSelector((state) => state.product);
  const {user } = useSelector(state => state.auth)
 const { localProduct} = useSelector((state) => state.local);
  const [productLocalStorage,setProductLocalStorage] = useState() //değiş
  const [priceLocalStorage,setPriceLocalStorage] = useState() //değiş

  const [isLocalStorageLoaded, setIsLocalStorageLoaded] = useState(false);
  const dispatch = useDispatch()
  let email = "a"
  let auth = JSON.parse(localStorage.getItem("user")).user.email
 if(user){
  email = user.user.email
 }
  const total = getTotalPrice();
console.log("firebaselocalproduct",localProduct)
 const firebasee=localProduct.filter(cart =>cart.user ===auth)



  console.log("toplam fiat", total)



  const {cartItems} = useSelector(state=> state.cart)

  const handleAddToCart = (product) =>{

    //dispatch(localProduct(product))
    dispatch(addToCart(product))  // fiyat chekout
    addLocalStorage({email: email, product: product})
    dispatch(localProducts(email,product))
    
  }




  useEffect(() => {
    const fetchData = async () => {
      const data = await getFromLocalStorage(email);
      console.log("DATA",data)
      setProductLocalStorage(data);
    
    };
    fetchData();
  }, []);


 
  const handleDeleteToCart= (product) =>{
      dispatch(deleteToCart(product))
      removeFromLocalStorage({email: email, product: product})
     dispatch(localProductsDelete(email,product))
      
  }

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

 
console.log("cartitems",cartItems)

const data = getFromLocalStorage(email)

console.log("productLocalStorage" , productLocalStorage)




  return (
    <div>
      <div className='cart-container'>
        <div className='cartlist-card'>
          

          {
            // varsa döndür yoksa hata verme demek
     // productLocalStorage && productLocalStorage.map((cartItem) => 
     firebasee.map((cartItem) => 
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