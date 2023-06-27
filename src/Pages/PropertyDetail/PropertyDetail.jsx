import React, {useEffect, useState} from 'react'
import './PropertyDetail.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {MdOutlineBed, MdOutlineBathtub} from 'react-icons/md'
import Bedroom from '../../Components/BedroomCard/Bedroom'



function PropertyDetail({baseUrl}) {
    //show data for a specific city
    //the id is in the url
    //use hook to retrieve the value with same id and capital
    const {propertyId}  = useParams()

    const[Property, setProperty] = useState('')
    



    

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
            
                <img className='head-image' src={Property?.images}/>
                <div className='property-slider'>
                    <img src={Property?.images} />
                    <img src={Property?.images} />
                    <img src={Property?.images} />
                </div>
            
             </div>

            <div className='property-info'>
                
                <div className='property-detail'>
                    <h2></h2>
                    <table>
                        <tbody>
                        <tr>
                            <th>Bedrooms</th>
                            <th>Bathrooms</th>
                            <th>Property Type</th>
                        </tr>
                        <tr>
                            <td><MdOutlineBed /> {Property?.bedroom_count}</td>
                            <td><MdOutlineBathtub /> {Property?.bathroom_count}</td>
                            <td>{Property?.property_type}</td>
                        </tr>
                        <tr>
                            <th>Price</th>
                            <th>Furnished type</th>
                            <th>Available from</th>
                        </tr>
                        <tr>
                            <td>{Property?.rent}</td>
                            <td>{Property?.furnished}</td>
                            <td>{Property?.availability}</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div className='button-container'>
                    <button> Shortlist</button>
                    <button> Book Viewing</button>
                </div>
        </div>

        


        </div>
        <div className='description-container'>
            <div className='decription-detail'>
                <h3>Description</h3>  
                <p>{Property?.property_description}</p>
            </div>
            <div className='description-bedroom'>
                <h3>Bedroom Prices</h3>
                <div className='bedroom'>
                <p>bedroom price </p>
                      
                </div>

            </div>  
        </div>
        <h4>Key Features</h4>
        <p>{Property?.key_features}</p>
        <p>{Property?.key_features}</p>
        <p>{Property?.key_features}</p>
        <p>{Property?.key_features}</p>
        <p>{Property?.key_features}</p>
        
    </div>
  )
}

export default PropertyDetail