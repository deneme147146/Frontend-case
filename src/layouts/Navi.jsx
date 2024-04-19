import React, { useEffect, useState } from 'react'
import Wallet from './Wallet'
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { searchCardList } from '../store/actions/productActions';



const Navi = () => {



  const dispatch = useDispatch();

  const { originProducts, originLoading, originError} = useSelector((state) => state.product);

  const [filteredProducts, setFilteredProducts] = useState([])

  //  burger menu

  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  //
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


  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked")
      setMenuClass("menu visible")
      
    } else {

      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
      
    }
  }


  return (

    
      
    <div className='header'>
      
        <div className='header-left'>
        {/* <div className='burger-menu'>
            <div className={burger_class} onClick={updateMenu}></div>
            <div className={burger_class} onClick={updateMenu}></div>
            <div className={burger_class} onClick={updateMenu}></div>
            
          </div> */}

          <div >
          <h2>Eteration</h2>
          </div>
          
        
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