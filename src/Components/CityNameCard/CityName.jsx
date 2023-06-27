import React from 'react'
import './CityName.css'
import { Link } from 'react-router-dom'

function CityName({city}) {
  return (
    <Link to={`/citydetails/${city?._id}`}>
  
      
    <div className='cityname-card'>
        <p>{city?.name}</p>
    </div>
    </Link>
  )
}

export default CityName