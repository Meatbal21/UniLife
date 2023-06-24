import React from 'react'
import './PropertyCard.css'
import {MdOutlineBed, MdOutlineBathtub, MdOutlineHome, MdOutlinePinDrop} from 'react-icons/md'
import { Link } from 'react-router-dom'


function PropertyCard({citydetail}) {
  return (
    
    <div className='propcard'>
        
        
        <img src={citydetail?.images[0]}/>
        <div className='propcard-info'>
            <div className='propcard-price'>
                <p>$ {citydetail?.rent}</p>
                <p>pppw include bills</p>
            </div>
            <div className='propcard-room'> 
            <p><MdOutlineBed className='prop-icon'/>{citydetail?.bedroom_count}</p>
            <p><MdOutlineBathtub className='prop-icon'/>{citydetail?.bathroom_count}</p>
            </div>


        </div>
        <div className='prop-furnish'>
            <p>{citydetail?.property_type}</p>
            <p>{citydetail?.furnished}</p>
        </div>
        <p className='prop-address'><MdOutlinePinDrop className='prop-icon'/>  {citydetail?.address.street}, {citydetail?.address.city}, {citydetail?.address.postcode}</p>
        <Link to={`/propertydetails/${citydetail?._id}`}><button><MdOutlineHome className='prop-icon'/>View Home</button></Link>
        
    </div>

    
  )
}

export default PropertyCard