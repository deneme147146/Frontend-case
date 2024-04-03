import React, { useEffect, useState } from 'react'
import '../style/Card.css'
import ProductService from '../services/productService'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/actions/cartActions'
import { cartItems } from '../store/initialValues/cartItems'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../store/thunk'
import { addLocalStorage } from '../helper/LocalStorageHelper'

const Card = () => {

  const dispatch = useDispatch()

  const { products, loading, error } = useSelector((state) => state.product);
  const [currentPage, setCurrentPage] =useState(1)
  const productsPerPage = 12;
  const [cartItems , setCartItems] = useState([])


  const handleAddToCart= (product) => {

   // addLocalStorage(product)
    dispatch(addToCart(product))
  }


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(()=>{
    const storedCartItems =JSON.parse(localStorage.getItem('cart')) || []
    
    setCartItems(storedCartItems)
    console.log("card localstroage", cartItems)
    
  },[])

  


  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <><><div className='card-container'>
      {currentProducts.map(product => (
        <div key={product.id} className="card">
          <Link to={`/products/${product.id}`}>

          <img src={product.image} className="card-image" />
          </Link>
          <div className="card-info">
            <p className="card-price">{product.price} ₺</p>
            <Link to={`/products/${product.id}`}>
            <h4 className="card-title">{product.name}</h4>
            </Link>
            <button onClick={() => handleAddToCart(product)} className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
      <div className='pagination'>
        <span onClick={() => paginate(currentPage - 1)}>&lt;</span>
        {[...Array(Math.ceil(products.length / productsPerPage))].map((_, index) => (
          <span className='paginat' key={index} onClick={() => paginate(index + 1)}>{index + 1}</span>
        ))}
        <span onClick={() => paginate(currentPage + 1)}>&gt;</span>


      </div></>
      <div className='sayfa-sayi'> 
          pagination : {currentPage}
      </div>
      </>
  );


}



export default Card