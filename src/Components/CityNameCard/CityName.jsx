import React from 'react'
import './CityName.css'
import { Link } from 'react-router-dom'

function CityName({allcity}) {
  return (
    <Link to={`/citydetails/${allcity?._id}`}>
    <div className='cityname-card'>
        <p>{allcity?.name}</p>
    </div>
    </Link>
  )
}

export default CityName