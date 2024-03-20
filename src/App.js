import { useEffect, useState } from 'react';
import './App.css';
import ProductService from './services/productService';
import Navi from './layouts/Navi';

function App() {


 

  console.log(ProductService)
  return (
    <div className="App">
      <Navi></Navi>
      
    </div>
  );
}

export default App;
