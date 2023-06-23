import React from 'react'
import './PropertyCard.css'
import {MdOutlineBed, MdOutlineBathtub, MdOutlineHome} from 'react-icons/md'


function PropertyCard({citydetail}) {
  return (
    
    <div className='propcard'>
        
        
        <img src={citydetail?.images[0]}/>
        <div className='propcard-info'>
            <div className='propcard-price'>
                <p>{citydetail?.bedroom_prices.bedroom_one}</p>
                <p>pppw include bills</p>
            </div>
            <div className='propcard-room'> 
            <p><MdOutlineBed/>{citydetail?.bedroom_count}</p>
            <p><MdOutlineBathtub/>{citydetail?.bathroom_count}</p>
            </div>


        </div>
        <div className='prop-furnish'>
            <p>Detached</p>
            <p>{citydetail?.furnished}</p>
        </div>
        <p className='prop-address'>{citydetail?.address.street}, {citydetail?.address.city}, {citydetail?.address.postcode}</p>
        <button><MdOutlineHome />View Home</button>
    </div>
  )
}

export default PropertyCard