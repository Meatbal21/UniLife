import React from 'react'
import './Homepage.css'

function Homepage() {
  return (
    <div className='homepage-container'>
        <div>
          <div>
            <h1>Find student homes with bills included</h1>
            <p>A simple and faster way to search for student accomodation</p>
          </div>
          <div>
            <input placeholder='Search City'  />
            <button>Find Homes</button>
          </div>
        </div>


    </div>
  )
}

export default Homepage