import React, { useState, useEffect } from 'react'
import './Homepage.css'
import axios from 'axios'
import CityCard from '../../Components/CityCard/CityCard'
import {MdOutlineTravelExplore, MdRule, MdGrading, MdOutlineRadar, MdFavoriteBorder} from 'react-icons/md'
import man from '../../assets/man.png'
import { Link } from 'react-router-dom'



function Homepage({baseUrl}) {
  //create state for city
  const [cities, setCities] = useState([])

  //make api call when the page load
  //use effect
  useEffect(
    () =>{
      console.log('homepage loaded')
      //api call
      axios.get(`${baseUrl}/cities?limit=9`)
      .then(res=>{
        console.log(res.data.response)
        
        //store data
        setCities(res.data.response)
      })
      .catch(err=>console.log(err))

    },[] //empty array run when page load
  )
    



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
        <div className='card-detail'>
          {
            //set up for card
            cities.map(item=><CityCard 
                        key={item._id}
                        city={item}/>)


          }
        </div>
       <Link to='/citysearch'><button>See All Cities</button> </Link>
      </div>
      <div className='ad-container'>
      <h3>Compare all inclusive student homes.</h3>
        <div className='ad-details'>
          <div className='ad-card'>
          <MdOutlineTravelExplore />
          <p>Search</p>
          <p>Find your dream home 
            in the perfect area near your university.</p>  
          </div>  

          <div className='ad-card'>
            <MdRule />
            <p>Compare</p>
            <p>Compare student accommodation 
              to find the right home for you.</p>
          </div>

          <div className='ad-card'>
            <MdGrading />
            <p>Bills Included</p>
            <p>Bills are included in all rent prices. 
              No hidden fees.</p>
          </div>
        </div>   

      </div>    

      <div className='info-container'>
          <img src={man} />
          <div className='info-detail'>
            <div className='info-item'>
              <MdOutlineRadar className='info-icon'/>
              <div className='info'>
               
                <p>Best selection</p>
                <p>Best selection of student accommodations. 
                  Never been easier to find a home that's right for you.</p>
              </div>


              
            </div>  

            <div className='info-item'> 
              <MdFavoriteBorder className='info-icon'/>
              <div className='info'>
                
                <p>Your favorite</p>
                <p>Shortlist your favourite properties 
                  and send enquiries in one click.</p>
              </div>

            
            </div>
            <button>Search & Compare</button>
          </div>
          
            
          
      </div>



    </div>
  )
}

export default Homepage