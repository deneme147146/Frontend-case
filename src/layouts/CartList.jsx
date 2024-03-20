import React from 'react'
import '../style/CartList.css'

const CartList = () => {
  return (
    <div>
      <div className='cart-container'>
        <div className='cartlist-card'>

            <div>
              <p className='marka-name' style={{display: 'inline'}}>Samsung s22</p>
              <button className='btnn'>-</button>
              <button className='cart-value-btn , btnn'>5</button>
              <button className='btnn'>+</button>
            </div>
            <div>
              <p className='price'>12.000₺</p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default CartList