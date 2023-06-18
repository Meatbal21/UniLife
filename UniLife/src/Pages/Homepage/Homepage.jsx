import React from 'react'
import './Homepage.css'
import cover from '../../assets/cover-img.png'

function Homepage() {
    //styling background banner
    const bannerStyle = {
      backgroundImage: `url("${cover}")`,
      backgroundSize: 'cover',
      backgroundPosition: "center",
      backgroundRepeat: 'no-repeat',
      height: "60vh",
      position: 'relative'
    }

    



  return (
    <div className='homepage-container'>
      <div className='banner' >
        <div className='homepage-banner'>

          <div className='banner-logo'>
            <h1>Find student homes with bills included</h1>
            <p>A simple and faster way to search for student accomodation</p>
          </div>
          <div className='banner-search'>
            <input placeholder='Search City'  />
            <button>Find Homes</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Homepage