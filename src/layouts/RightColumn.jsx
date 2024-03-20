import React from 'react'
import CartList from './CartList'
import Checkout from './Checkout'

const RightColumn = () => {
  return (
    <div>
        <CartList></CartList>
        <Checkout></Checkout>
    </div>
  )
}

export default RightColumn