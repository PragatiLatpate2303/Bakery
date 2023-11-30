import React from 'react'
import './Veg.css'

import jsonData from '../components/asssets/jsonData/cakeJsonData.json';

const Veg = () => {
  return (
    <div>
      <div className='Category'>
        {jsonData.map((item,index) => (
          <div className='About'>
            {jsonData[index] && (
            <img src={item.imageURL}alt={`Image ${index + 1}`} />)}
            {jsonData[index] && (
              <h4>{item.name}</h4>)}
            {jsonData[index] && (
            <h4>Price-{item.price}</h4>)}
          </div>))}
    </div>
    </div>
  )
}

export default Veg
