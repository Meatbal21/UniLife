import React, {useEffect, useContext, useState} from 'react'
import './CityDetails.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import PropertyCard from '../../Components/PropertyCard/PropertyCard'
import { CityContext } from '../../Context/CityContext'
import student from '../../assets/student.png'



function CityDetails({baseUrl}) {
    //show data for a specific city
    //the id is in the url
    //use hook to retrieve the value with same id and capital
    const {cityId}  = useParams()

    //create state for city
    const {allCities} = useContext(CityContext) 
    const studentInfo = allCities.find(item=> item._id == cityId)


    //create state to hold city details
    const [cityDetails, setCityDetails] = React.useState([])

    const[type, setType] = useState('Any type')
    const[price, setPrice] = useState('Any price')
    const[bedroom, setBedroom] = useState('Any bedroom')
    const[bathroom, setBathroom] = useState('Any bathroom')
    const[query, setQuery] = useState({city_id: cityId})
    const bedroomCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const bathroomCount = [1, 2, 3, 4, 5]
    const priceAmount = [1000, 1500, 2000, 2500, 3000]
    const propertyType = ['Apartment', 'Semi-Detached', 'Detached' ]


    //calling api
    useEffect(
        ()=> {
            //put api call
            axios.get(`https://unilife-server.herokuapp.com/properties/city/${cityId}`)
            .then(res =>{
                console.log(res.data.response)
                //store data 
                setCityDetails(res.data.response)
                
            })
            .catch(err=>console.log(err))
        },[] //run when page loaded
    )

    useEffect(
      ()=>{
        axios.post(`https://unilife-server.herokuapp.com/properties/filter`,{query})
        .then(res=>{
          console.log(res.data.response)
          setCityDetails(res.data.response)
        })
        .catch(err=>console.log(err))
      },[query]
    )

    const filterProperties = (bedroom, bathroom, type, price, id)=>{
      console.log('BATHROOM', bathroom)

      const queryObject = {
        city_id: id,
      };

      if(bedroom !== 'Any bedroom'){
        queryObject.bedroom_count = bedroom;
      }
      if(bathroom !== 'Any bathroom'){
        queryObject.bathroom_count = bathroom;
      }
      if(type !== 'Any type'){
        queryObject.property_type = type;
      }
      if(price !== 'Any price'){
        queryObject.rent = price;
      }

      setQuery(queryObject)
      console.log('OBJECT', queryObject)
    }

    useEffect(
      ()=>{
        filterProperties(bedroom, bathroom, type, price, cityId)
      }, [bedroom, bathroom, price, type, cityId]
    )

    const handleBathroom = (e) =>{
      setBathroom(e.target.value)
    }

    const handleBedroom = (e) =>{
      setBedroom(e.target.value)
    }

    const handlePrice = (e) =>{
      setPrice(e.target.value)
    }

    const handleType = (e) =>{
      setType(e.target.value)
    }



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
          <div className='banner-filter'>
            <table className='search-table'>
              <tbody>
                <tr className='banner-filter-header'>
                  <th>Min Bedroom</th>
                  <th>Min Bathroom</th>
                  <th>Max Price</th>
                  <th>Home Type</th>
                </tr>

                <tr className='banner-filter-item'>
                  <td>
                    <select value={bedroom} onChange={handleBedroom} >
                      <option value="Any bedroom">Any bedroom</option>
                      {
                        bedroomCount.map((item)=>{
                          return <option key={item} value={item}>{item}</option>
                        })
                      }
                    </select>
                  </td>
                  <td>
                    <select value={bathroom} onChange={handleBathroom}>
                      <option value="Any bathroom">Any bathroom</option>
                      {
                        bathroomCount.map((item)=>{
                          return <option key={item} value={item}>{item}</option>
                        })
                      }
                    </select>
                  </td>
                  <td>
                    <select value={price} onChange={handlePrice}>
                      <option value="Any Price">Any price</option>
                      {
                        priceAmount.map((item)=>{
                          return <option key={item} value={item}>{item}</option>
                        })
                      }
                    </select>
                  </td>
                  <td><select value={type} onChange={handleType}>
                    <option value="Any type">Any type</option>
                    {
                        propertyType.map((item)=>{
                          return <option key={item} value={item}>{item}</option>
                        })
                      }
                    </select>
                  </td>
                </tr>

              </tbody>
            </table>
        
          </div>
        </div>
        
      </div>
      <div className='property-container'>
      <h2>{cityDetails?.length} Home in {cityDetails[0]?.address.city}</h2>
        <div className='property-card'>
          {
            //set up for card
            cityDetails.map(item=><PropertyCard 
                        key={item._id}
                        citydetail={item}
                        />)

            }
        </div>
      </div>

      <div className='banner-city'>
       
          <div className='city-info'>
            <h3>Being a student in {cityDetails[0]?.address.city}</h3>
            <p>{studentInfo?.student_life}</p>
            <p>{studentInfo?.universities}</p>
            
          
          </div>
          <div className='student-banner'>
            <img src={student} />
          </div>
      </div>
    </div>
  )
}

export default CityDetails