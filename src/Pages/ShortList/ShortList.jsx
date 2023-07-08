import React, {useContext} from 'react'
import './ShortList.css'
import { ShortListContext } from '../../Context/ShortListContext'
import {Link} from 'react-router-dom'
import ShortlistCard from '../../Components/ShortListCard/ShortlistCard'


function ShortList() {
    const {shortlist, setShortList} = useContext(ShortListContext)


  return (
    <div className='shortlist-container'>
        <h2>Your Saved List</h2>
        {shortlist.length >0?(
            <ul className='shortlist-header'>
                <p>Property</p>
                <p>Address</p>
                <p>Rent</p>
                <p>Availability</p>
                <p>Remove</p>
            </ul>
            
        )
            :
            (<p></p>)
        }

        {
            shortlist.map(item=><ShortlistCard
                key={item._id}
                Property={item}
                />)
        }

        <div className='list-sub'>
            {shortlist.length > 0?(
            <p></p>)
           
            :
        (<h3 className='list-message'>No Favorite Property yet</h3>)
            }
        </div>
    </div>
  )
}

export default ShortList