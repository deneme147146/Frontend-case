import React, { useEffect, useState } from 'react'
import Wallet from './Wallet'
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { searchCardList } from '../store/actions/productActions';



const Navi = () => {



  const dispatch = useDispatch();

  const { originProducts, originLoading, originError} = useSelector((state) => state.product);

  const [filteredProducts, setFilteredProducts] = useState([])


  const handleSearch =(e) =>{
    const searchTerm = e.target.value.trim().toLowerCase();
    console.log("PRODUCTS",originProducts.length)
    const filtered = originProducts.filter(product=> 
      product.name.toLowerCase().includes(searchTerm))

      setFilteredProducts(filtered)

      dispatch(searchCardList(filtered));

      console.log("FİLTERED DATA", filtered.map(item => item.brand));

   
  }

  // ARAMA CUBUGUNDA HATA VAR SİLDİĞİNDE PRODUCTS GĞNCELLENMİYOR 


  useEffect(()=> {
        
  },[filteredProducts])





  return (

    
      
    <div className='header'>
        <div className='header-left'>
        <h2>Eteration</h2>
        </div>

        <div className='header-center'>
        
        
        <input onChange={handleSearch}t style={{marginTop:10, height: 40, width: 400, paddingLeft: '30px' }}
        type='text'
        placeholder='Search'
        /> 
        
        </div>

        <div className='header-right'>
            <Wallet></Wallet>

        </div>

    </div>


  )
}

export default Navi