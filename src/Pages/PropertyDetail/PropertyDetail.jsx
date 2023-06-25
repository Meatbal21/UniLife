import React, {useEffect, useState} from 'react'
import './PropertyDetail.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'


function PropertyDetail({baseUrl}) {
    //show data for a specific city
    //the id is in the url
    //use hook to retrieve the value with same id and capital
    const {propertyId}  = useParams()

    //setup image index
    const [index, setIndex] = useState([])

    //create state for property
    const [property, setProperty] = useState('')

    //setup for api endpoint
    useEffect(
        //api call
        ()=>{
            axios.get(`${baseUrl}/properties/${propertyId}`)
            .then(res=>{
                console.log(res.data)
                //store data
                setProperty(res.data)
                //store data
                setIndex(res.data.images)
            })
            .catch(err=>console.log(err))

        },[]
    )



  return (
    <div className='propertydetail-container'>
        <div className='property-image'>
            <div>
                <img src={index}/>
            </div>
        </div>

    </div>
  )
}

export default PropertyDetail