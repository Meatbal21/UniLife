import React from 'react'
import './CityCard.css'
import { Link } from 'react-router-dom'

function CityCard({city}) {
  
    //styling background
    const cardStyle = {
      backgroundImage: `url("${city?.image_url}")`,
      backgroundSize: 'cover',
      backgroundPosition: "center",
      backgroundRepeat: 'no-repeat',
      height: "20vh",
      position: 'relative',
      zIndex: "0",
    }




  return (
    <Link to={`/citydetails/${city?._id}`}>
    <div className='cities-card' style={cardStyle}>
      <p>{city?.name}</p>
      <p>{city?.property_count} properties</p>

    </div>
    </Link>
  )
}

export default CityCard