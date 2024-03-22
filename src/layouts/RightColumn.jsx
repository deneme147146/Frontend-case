import React from 'react'
import CartList from './CartList'
import Checkout from './Checkout'
import '../style/RightColumn.css'
import { ToastContainer } from 'react-toastify'

const RightColumn = () => {
  return (
    <div className='right-column'>

<ToastContainer position='bottom-right'></ToastContainer>
        <CartList></CartList>
        <Checkout></Checkout>
    </div>
  )
}

export default RightColumn