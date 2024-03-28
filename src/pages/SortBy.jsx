import React, { useEffect, useState } from 'react'
import '../style/SortBy.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/thunk';
import { sortByHighToLow, sortByLowToHigh, sortByNewToOld, sortByOldToNew } from '../store/actions/productActions';

const SortBy = () => {

  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);
  const [sortBy, setSortBy] = useState(''); 

  useEffect(() => {
    dispatch(fetchProducts());

  }, [dispatch]);
 

  const handleSortChange = (event) => {
    const selectedSort = event.target.value;
    setSortBy(selectedSort);

    // Tetiklenen sıralama eylemini gönderin
    switch (selectedSort) {
      case 'oldToNew':
        dispatch(sortByOldToNew());
        break;
      case 'newToOld':
        dispatch(sortByNewToOld());
        break;
      case 'highToLow':
        dispatch(sortByHighToLow());
        break;
      case 'lowToHigh':
        dispatch(sortByLowToHigh());
        break;
      default:
        break;
    }
  };



  

  return (

    <div className='all-sort'>
    <p style={{color:'grey'}}>Sort By</p>
   
    <div className="sort-container">
    <div className="sort-card">

        <div>
        <input type="radio" id="oldToNew" name="sort" value="oldToNew" onChange={handleSortChange}/>
      <label htmlFor="oldToNew">Old to New</label>
        </div>
        <br></br>
        <div>
        <input type="radio" id="newToOld" name="sort" value="newToOld" onChange={handleSortChange} />
      <label htmlFor="newToOld">New to Old</label>
        </div>
        <br></br>
        <div>
        <input type="radio" id="highToLow" name="sort" value="highToLow"  onChange={handleSortChange}/>
      <label htmlFor="highToLow">Price High to Low</label>
        </div>
        <br></br>
        <div>
                
  
      <input type="radio" id="lowToHigh" name="sort" value="lowToHigh"  onChange={handleSortChange} />
      <label htmlFor="lowToHigh">Price Low to High</label>
        </div>

    </div>
  </div>
  </div>
  )
}

export default SortBy