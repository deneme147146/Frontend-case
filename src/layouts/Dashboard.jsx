import React from 'react'

import ProductList from '../pages/ProductList'
import '../style/Dashboard.css'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'


const Dashboard = () => {
  return (
    <div className='dash'>

      <Routes>
        <Route path='/' element={<ProductList></ProductList>}/>
        <Route path='/products' element={<ProductList></ProductList>}/>
        <Route path='/products/:id' element={<ProductDetail></ProductDetail>}/>
      </Routes>
        
  
        
    </div>
  )
}

export default Dashboard