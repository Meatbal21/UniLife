import React, { useState, useEffect } from 'react'
import './Homepage.css'


function Homepage() {
  //create state for city
  const [city, setCity] = useState([])

    



  return (
    <div className='homepage-container'>
      <div className='banner' >
        <div className='homepage-banner'>

          <div className='banner-logo'>
            <h1>Find student homes with bills included</h1>
            <p>A simple and faster way to search for student accomodation</p>
          </div>
          <div className='banner-search'>
            <input placeholder='Search City' className='search-bar'/>
            <button>Find Homes</button>
          </div>
        </div>
      </div>

      <div className='card-container'>
        <h2>Student accommodations in our top cities</h2>
        <div className='card-detail'></div>
      </div>

    </div>
  )
}

export default Homepage