import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { TfiBag } from "react-icons/tfi";
import '../style/Wallet.css'


const Wallet = () => {
  return (
    
    <div className="wallet-container">
    <TfiBag />
    <div className="wallet-balance">{''} 117.000₺</div>
    <div className="wallet-user">
      <IoPersonOutline />
           {''}  Hüseyin</div>
    </div>
  )
}

export default Wallet