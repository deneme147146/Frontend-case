import React from 'react'
import SortBy from './SortBy'
import Brands from './Brands'
import Model from './Model'
import '../style/Filter.css'

const Filter = () => {
  return (
    <div className='filter'>
      <div style={{float:"right"}}>

      </div>
        <SortBy></SortBy>
        <Brands></Brands>
        <Model></Model>
    </div>
  )
}

export default Filter