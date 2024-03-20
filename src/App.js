import { useEffect, useState } from 'react';
import './App.css';
import ProductService from './services/productService';
import Navi from './layouts/Navi';
import Dashboard from './layouts/Dashboard';
import RightColumn from './layouts/RightColumn';

function App() {


 

  console.log(ProductService)
  return (
    <div className="App">
      <Navi></Navi>
      <Dashboard></Dashboard>
      <RightColumn></RightColumn>
      
    </div>
  );
}

export default App;
