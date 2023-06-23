import React, {useEffect} from 'react'
import './CityDetails.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import PropertyCard from '../../Components/PropertyCard/PropertyCard'

function CityDetails({baseUrl, allcity}) {
    //show data for a specific city
    //the id is in the url
    //use hook to retrieve the value with same id and capital
    const {cityId}  = useParams()

    //create state to hold city details
    const [cityDetails, setCityDetails] = React.useState([])

    //create state to hold selected city
    const [selectCity, setSelectCity] = React.useState('')

    //calling api
    useEffect(
        ()=> {
            //put api call
            axios.get(`${baseUrl}/properties/city/${cityId}`)
            .then(res =>{
                console.log(res.data.response)
                //store data 
                setCityDetails(res.data.response)
                //store data
                setSelectCity(res.data.response)
            })
            .catch(err=>console.log(err))
        },[] //run when page loaded
    )


  return (
    <div className='citydetail-container'>
      <div className='banner' >
        <div className='citydetail-banner'>

          <div className='banner-logo'>
            <h1>Search Accomodation</h1>
            <p>Whatever you're after, 
                we can help you find 
                the right student accommodation for you. </p>
          </div>
          <div className='banner-search'>
            <input placeholder='Search City' className='search-bar'/>
            <button>Find Homes</button>
          </div>
        </div>
        
      </div>
      <div className='property-container'>
      <h2>Home in {selectCity?.length}, {}</h2>
        <div className='property-card'>
          {
            //set up for card
            cityDetails.map(item=><PropertyCard 
                        key={item._id}
                        citydetail={item}/>)


          }
        </div>
      </div>
    </div>
  )
}

export default CityDetails