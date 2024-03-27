import React, { useEffect, useState } from 'react'
import '../style/Card.css'
import ProductService from '../services/productService'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/actions/cartActions'
import { cartItems } from '../store/initialValues/cartItems'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../store/thunk'

const Card = () => {

  const dispatch = useDispatch()

  const { products, loading, error } = useSelector((state) => state.product);
  const [currentPage, setCurrentPage] =useState(1)
  const productsPerPage = 12;
  const [cartItems , setCartItems] = useState([])

  const handleAddToCart= (product) => {
    const updatedCartItems = [...cartItems, product]

    setCartItems(updatedCartItems)

    localStorage.setItem('cart', JSON.stringify(updatedCartItems))
    dispatch(addToCart(product))
  }

  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(()=>{
    const storedCartItems =JSON.parse(localStorage.getItem('cart')) || []

    setCartItems(storedCartItems)
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

  {/*

  <div  className="card">
        <img src='data:image/jpeg;base64,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'
         className="card-image" />
        <div className="card-info">
        <p className="card-price">4947 ₺</p>
          <h4 className="card-title">494</h4>
          
  
        </div>
        <button className="add-to-cart-btn">Add to Cart</button>
  
      
      </div> 


 */ }
}



export default Card