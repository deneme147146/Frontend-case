import { useEffect, useState } from 'react';
import './App.css';
import ProductService from './services/productService';
import Navi from './layouts/Navi';
import Dashboard from './layouts/Dashboard';
import RightColumn from './layouts/RightColumn';
import Filter from './pages/Filter';

import { fetchDetailProduct, fetchProducts } from './store/thunk';
import { getFromLocalStorage } from './helper/LocalStorageHelper';


function App() {



  return (
    <div className="App">
      <div className='anabir'>

      <Navi></Navi>
      </div>
   
      <div className='anaiki'>
        <Filter></Filter>
      <Dashboard></Dashboard>
      <RightColumn></RightColumn>
      </div>
      
      
    </div>
  );
}

export default App;
