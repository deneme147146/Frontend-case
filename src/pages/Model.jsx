import React from 'react'
import '../style/Model.css'

const Model = () => {
  return (
    <div className='all-model'>
      <p style={{color:'grey'}}>Model</p>
      <div className="model-container">
        <div className="model-card">
        <input className='input-search-model'
        type='text'
        placeholder='Search'
        />
          <div>
            <input type="checkbox" id="11" name="model" value="11" />
            <label htmlFor="11">11</label>
          </div>
          <br />
          <div>
            <input type="checkbox" id="12Pro" name="model" value="12Pro" />
            <label htmlFor="12Pro">12Pro</label>
          </div>
          <br />
          <div>
            <input type="checkbox" id="13Pro" name="model" value="13Pro" />
            <label htmlFor="13Pro">13Pro</label>
          </div>
          <br />
          <div>
            <input type="checkbox" id="14" name="model" value="14" />
            <label htmlFor="14">14</label>
          </div>
          <br />
          <div>
            <input type="checkbox" id="14Pro" name="model" value="14Pro" />
            <label htmlFor="14Pro">14Pro</label>
          </div>
          <br />
          <div>
            <input type="checkbox" id="15" name="model" value="15" />
            <label htmlFor="15">15</label>
          </div>
          <br />
          <div>
            <input type="checkbox" id="11" name="model" value="11" />
            <label htmlFor="11">11</label>
          </div>
          <br />
          <div>
            <input type="checkbox" id="15Pro" name="model" value="15Pro" />
            <label htmlFor="15Pro">15Pro</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Model