import React from 'react'
import './Banner.css'
import {BsFacebook, BsInstagram} from 'react-icons/Bs'
import {AiFillTwitterCircle} from 'react-icons/Ai'

function Banner() {
  return (
    <div className='banner-container'>
      <div className='left-banner-container'>
      <h3>Keep in Touch</h3>
      <p>Curious about new offerings? 
        Sign up for our weekly newsletter 
        and stay informed.</p>
      <input placeholder='Your email' className='email-input'/>

      </div>

      <div className='right-banner-container'>
      <h3>Let's Socialize</h3>
      <div className='media-container'>
      <p><BsFacebook className='media-icon'/>Facebook</p>
      <p><BsInstagram className='media-icon'/>Instagram</p>
      <p><AiFillTwitterCircle className='media-icon'/>Twitter</p>
      </div>


      </div>
    </div>
  )
}

export default Banner