import React from 'react'

import ProductList from '../pages/ProductList'
import '../style/Dashboard.css'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import Filter from '../pages/Filter'
import RightColumn from './RightColumn'


const Dashboard = () => {
  return (
    <div className='anaiki'>

      <Filter></Filter>
      <div className='dash'>
      <Routes>
        <Route path='/' element={<ProductList></ProductList>}/>
        
        <Route path='/products/:id' element={<ProductDetail></ProductDetail>}/>
      </Routes>
        
      </div>
    
      <RightColumn></RightColumn>
        
    </div>
  )
}

export default Dashboard