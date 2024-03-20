import React from 'react'
import Wallet from './Wallet'
import { CiSearch } from "react-icons/ci";

const Navi = () => {
  return (

    <div className='header'>
        <div className='header-left'>
        <h2>Eteration</h2>
        </div>

        <div className='header-center'>
        
        
        <input style={{marginTop:10, height: 40, width: 370, paddingLeft: '30px' }}
        type='text'
        placeholder='Search'
        /> <CiSearch  style={{ color:'black', position: 'absolute', top: 25, left: 472 }}  />
        
        </div>

        <div className='header-right'>
            <Wallet></Wallet>

        </div>

    </div>



  )
}

export default Navi