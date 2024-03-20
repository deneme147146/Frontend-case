import React from 'react'
import '../style/Brands.css'

const Brands = () => {
  return (
    <div className='all-brands'>
      <p style={{color:'grey'}}>Brands</p>
      <div className="brands-container">
        <div className="brands-card">
        <input className='input-search'
        type='text'
        placeholder='Search'
        />
          <div>
            <input type="checkbox" id="Apple" name="brands" value="Apple" />
            <label htmlFor="Apple">Apple</label>
          </div>
          <br />
          <div>
            <input type="checkbox" id="Samsung" name="brands" value="Samsung" />
            <label htmlFor="Samsung">Samsung</label>
          </div>
          <br />
          <div>
            <input type="checkbox" id="Huawei" name="brands" value="Huawei" />
            <label htmlFor="Huawei">Huawei</label>
          </div>
          <br />
          <div>
            <input type="checkbox" id="Xiaomi" name="brands" value="Xiaomi" />
            <label htmlFor="Xiaomi">Xiaomi</label>
          </div>
          <br />
          <div>
            <input type="checkbox" id="faefa" name="brands" value="faefa" />
            <label htmlFor="faefa">faefa</label>
          </div>
          <br />
          <div>
            <input type="checkbox" id="efaffga" name="brands" value="efaffga" />
            <label htmlFor="efaffga">efaffga</label>
          </div>
          <br />
          <div>
            <input type="checkbox" id="rjrjrjr" name="brands" value="rjrjrjr" />
            <label htmlFor="rjrjrjr">rjrjrjr</label>
          </div>
          <br />
          <div>
            <input type="checkbox" id="ğpkfek" name="brands" value="ğpkfek" />
            <label htmlFor="ğpkfek">ğpkfek</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brands