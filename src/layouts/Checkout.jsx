import React from 'react'
import '../style/Checkout.css'

const Checkout = () => {
  return (
    <div>
      <div className='checkout-container'>
        <div className='checkout-cart'>
          
      <div className='price-container'>

        <span>Total price:</span><span className='sepet-toplam'> 117.000₺</span>
       

      </div>
      <br></br>

      <div className='checkout-btn'>
        <button className='btn-check'>Checkout</button>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Checkout