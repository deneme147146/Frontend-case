import React from 'react'
import '../style/SortBy.css'

const SortBy = () => {
  return (

    <div>
    <p style={{color:'grey'}}>Sort By</p>
   
    <div className="sort-container">
    <div className="sort-card">

        <div>
        <input type="radio" id="oldToNew" name="sort" value="oldToNew" />
      <label htmlFor="oldToNew">Old to New</label>
        </div>
        <br></br>
        <div>
        <input type="radio" id="newToOld" name="sort" value="newToOld" />
      <label htmlFor="newToOld">New to Old</label>
        </div>
        <br></br>
        <div>
        <input type="radio" id="highToLow" name="sort" value="highToLow" />
      <label htmlFor="highToLow">Price High to Low</label>
        </div>
        <br></br>
        <div>
                
  
      <input type="radio" id="lowToHigh" name="sort" value="lowToHigh" />
      <label htmlFor="lowToHigh">Price Low to High</label>
        </div>

    </div>
  </div>
  </div>
  )
}

export default SortBy