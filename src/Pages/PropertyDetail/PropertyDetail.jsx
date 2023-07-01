import React, {useContext, useEffect, useState} from 'react'
import './PropertyDetail.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {MdOutlineBed, MdOutlineBathtub, MdOutlineCheck, MdArrowBackIosNew, MdAddHome} from 'react-icons/md'
import {AiOutlineHeart} from 'react-icons/ai'

import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import { ShortListContext } from '../../Context/ShortListContext'




function PropertyDetail({baseUrl}) {
    //show data for a specific city
    //the id is in the url
    //use hook to retrieve the value with same id and capital
    const {propertyId}  = useParams()

    const[Property, setProperty] = useState('')

    const [index,setIndex] = useState(0)
    
      //create state to control modal
  const[isOpen, setIsOpen] = React.useState(false)


    //import context
    const {shortlist, addProp, removeProp} = useContext(ShortListContext)

    //state for shorlist
  const [isFavorite, setFavorites] = React.useState (false)

  React.useEffect(
    ()=>{
      //console.log('update')
      //is this char in favorites?
      setFavorites(shortlist.find(item=> item._id == propertyId))

    },[shortlist]
  )


    //modal styles
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '90%',
      borderRadius: '20px',
    },
    overlay:{
      backgroundColor: "rgba(0,0,0,.5)"
    }
  };
  
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement(document.getElementById('root'));
    

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
               
            })
            .catch(err=>console.log(err))

        },[]
    )


  return (
    <div className='propertydetail-container'>
        <Link to={`/citydetails/${Property?.city_id?._id}`}><MdArrowBackIosNew className='arrow-icon'/> Back to Search</Link>
    
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

                    
                 

                { 
                    isFavorite?
                 <button  onClick={() => removeProp(Property._id)}><MdOutlineCheck className='btn-icon'/> Shortlist</button>
                 :
                 <button onClick={() =>addProp(Property)}><AiOutlineHeart className='btn-icon'/> Shortlist</button>
  
              
                } 
                   
                    <button onClick={() => setIsOpen(true)}>Book Viewing</button><Modal
                      isOpen={isOpen}
                      onRequestClose={() => setIsOpen(false)}
                      style={customStyles}
                      contentLabel="Book a Viewing"
                  >
                      
                      
                      <div className='modal-header-container'>
                        <div className='modal-header'>
                          <h2>Book a Viewing</h2>
                          <h3>{Property?.address?.street}, {Property?.address?.city}, {Property?.address?.postcode}</h3>
                          </div>
                          <MdAddHome className='add-home-icon'/>
                          
                      </div>
                      <div className='modal-info'>
                        <div className='modal-form'>
                            <form>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder='Enter your name' />
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder='Enter your email' />
                                <label htmlFor="phone">Phone Number</label>
                                <input type='phone' id='phone' placeholder='Enter your phone number' />
                            </form>
                        </div>
                        <div className='modal-message'>
                            <form>
                                <label htmlFor="message">Message</label>
                                <textarea  id="message" rows="7" placeholder='Enter your message'></textarea>
                                <button type='submit'>Submit</button>
                            </form>
                        </div>
                      </div>

                  </Modal>
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
                <div className='border-bedroom'>

                    
                    
                    {
                        Object.keys(Property?.bedroom_prices?? {}).map((item,index)=>{
                            return  <div className='bedroom' key={item}>
                                <h4>Bedroom {index+ 1}</h4>  
                                <div className='bedroom-price'>
                                <p>${Property?.bedroom_prices[item]} per week</p>
                                </div>
                            </div>
                        })
                    }



                </div>

            </div>  
        </div>
        <div className='feature-container'>
        <h4>Key Features</h4>


{
                        Object.keys(Property?.key_features?? {}).map((item,index)=>{
                            return  <div className='' key={item}>
                                
                                <p><MdOutlineCheck className='check-icon'/> {Property?.key_features?.[item]} </p>
                            </div>
                        })
                    }
        </div>
    </div>
  )
}

export default PropertyDetail