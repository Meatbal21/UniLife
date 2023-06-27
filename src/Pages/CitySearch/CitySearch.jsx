import React, { useContext} from 'react'
import './CitySearch.css'
import { CityContext } from '../../Context/CityContext'
import CityName from '../../Components/CityNameCard/CityName'

function CitySearch() {
    //create state for city
    const {allCities} = useContext(CityContext) 


  return (
    <div className='city-container'>
      
      <div className='banner' >
        <div className='city-banner'>
            <h1>Student Accomodation</h1>
            <p>UniLife have student accommodation available across the UK.
                Whatever you're after, 
                we can help you find the right student accommodation for you. </p> 
        </div>
      </div>

      <div className='city-name-container'>
        <h2>Search by City</h2>
        <div className='city-name-card'>
          {
              //set up for card
              allCities.map(item=><CityName 
                key={item._id}
                city={item}/>)



          }


         
        </div>
        </div>
    </div>
  )
}

export default CitySearch