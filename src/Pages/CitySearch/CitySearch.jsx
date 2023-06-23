import React, { useState, useEffect } from 'react'
import './CitySearch.css'
import axios from 'axios'
import CityName from '../../Components/CityNameCard/CityName'

function CitySearch({baseUrl}) {
//create state for all city
const [allCity, setAllCity] = useState([])


  //make api call when the page load
  //use effect
  useEffect(
    () =>{
      console.log('CitySearch loaded')
      //api call
      axios.get(`${baseUrl}/cities?limit=20`)
      .then(res=>{
        console.log(res.data.response)
        
        //store data
        setAllCity(res.data.response)
      })
      .catch(err=>console.log(err))

    },[] //empty array run when page load
  )


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
              allCity.map(item=><CityName 
                key={item._id}
                allcity={item}/>)



          }


          

            
        </div>
        </div>
    </div>
  )
}

export default CitySearch