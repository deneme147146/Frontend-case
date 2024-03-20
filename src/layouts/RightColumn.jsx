import React from 'react'
import CartList from './CartList'
import Checkout from './Checkout'
import '../style/RightColumn.css'

const RightColumn = () => {
  return (
    <div className='right-column'>
        <CartList></CartList>
        <Checkout></Checkout>
    </div>
  )
}

export default RightColumn