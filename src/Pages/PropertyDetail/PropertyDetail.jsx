import React, {useEffect, useState} from 'react'
import './PropertyDetail.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {MdOutlineBed, MdOutlineBathtub, MdOutlineCheck} from 'react-icons/md'
import {AiOutlineHeart} from 'react-icons/ai'
import Bedroom from '../../Components/BedroomCard/Bedroom'



function PropertyDetail({baseUrl}) {
    //show data for a specific city
    //the id is in the url
    //use hook to retrieve the value with same id and capital
    const {propertyId}  = useParams()

    const[Property, setProperty] = useState([])

    const [index,setIndex] = useState(0)
    



    

    //setup for api endpoint
    useEffect(
        //api call
        ()=>{
            axios.get(`${baseUrl}/properties/${propertyId}`)
            .then(res=>{
                console.log(res.data.bedroom_prices)
                //store data
                setProperty(res.data)
                //store data
               
            })
            .catch(err=>console.log(err))

        },[]
    )

  return (
    <div className='propertydetail-container'>
        <div className='property-info-container'>
            <div className='property-image'>
            
                <img className='head-image' src={Property?.images?.[index]}/>
                <div className='property-slider'>
                    <img src={Property?.images?.[1]} onClick={()=>setIndex(1)}/>
                    <img src={Property?.images?.[2]} onClick={()=>setIndex(2)}/>
                    <img src={Property?.images?.[3]} onClick={()=>setIndex(3)}/>
                    <img src={Property?.images?.[0]} onClick={()=>setIndex(0)}/>
                </div>
            
             </div>

            <div className='property-info'>
                
                <div className='property-detail'>
                    <h2>{Property?.address?.street}, {Property?.address?.city}, {Property?.address?.postcode}</h2>
                    <table>
                        
                        <tr className='table-header'>
                            <th>Bedrooms</th>
                            <th>Bathrooms</th>
                            <th>Property Type</th>
                        </tr>
                        <tr className='table-data'>
                            <td><MdOutlineBed /> {Property?.bedroom_count}</td>
                            <td><MdOutlineBathtub /> {Property?.bathroom_count}</td>
                            <td>{Property?.property_type}</td>
                        </tr>
                        <tr className='table-header'>
                            <th>Price</th>
                            <th>Furnished type</th>
                            <th>Available from</th>
                        </tr>
                        <tr className='table-data'>
                            <td>${Property?.rent}</td>
                            <td>{Property?.furnished}</td>
                            <td>{Property?.availability}</td>
                        </tr>
                       
                    </table>

                </div>
                <div className='button-container'>
                    <button><AiOutlineHeart /> Shortlist</button>
                    <button> Book Viewing</button>
                </div>
        </div>

        </div>
        <div className='description-container'>
            <div className='description-detail'>
                <h3>Description</h3>  
                <p>{Property?.property_description}</p>
            </div>
            <div className='description-bedroom'>
                <h3>Bedroom Prices</h3>
                <div className='bedroom'>
                <p>bedroom price  </p>
                </div>

            </div>  
        </div>
        <div className='feature-container'>
        <h4>Key Features</h4>
        <ul>
        <li><MdOutlineCheck />  {Property?.key_features?.[0]}</li>
        <li><MdOutlineCheck />  {Property?.key_features?.[1]}</li>
        <li><MdOutlineCheck />  {Property?.key_features?.[2]}</li>
        <li><MdOutlineCheck />  {Property?.key_features?.[3]}</li>
        <li><MdOutlineCheck />  {Property?.key_features?.[4]}</li>
        </ul>
        </div>
    </div>
  )
}

export default PropertyDetail