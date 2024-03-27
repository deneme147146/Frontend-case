import { useEffect, useState } from 'react';
import './App.css';
import ProductService from './services/productService';
import Navi from './layouts/Navi';
import Dashboard from './layouts/Dashboard';
import RightColumn from './layouts/RightColumn';
import Filter from './pages/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './store/thunk';

function App() {

  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
 

  console.log("REDUX DENEME:",products)

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
