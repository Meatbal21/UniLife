import React, {useContext} from 'react'
import './ShortlistCard.css'
import { ShortListContext } from '../../Context/ShortListContext'


function ShortlistCard({Property}) {
    const {removeProp} = useContext(ShortListContext)

  return (
    <div className='list-container'>
            <div className='list-item-detail'>
            <img src={Property?.images[0]}/>
            
            </div>

            <div className='list-item-address'>
                <p>{Property?.address?.street}</p>
                <p>{Property?.address?.city}</p>
                <p>{Property?.address?.postcode}</p>
            </div>
        
        <div className='list-rent'>
            <p>$ {Property?.rent}</p>
        
        </div>
        <div className='list-availability'>
            <p>{Property?.availability}</p>


        </div>
        <div className='list-remove'>
                <p onClick={() => removeProp(Property?._id)}>X</p>
            
        </div>

    </div>
  )
}

export default ShortlistCard