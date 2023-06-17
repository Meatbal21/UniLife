import React from 'react'
import './Footer.css'
import {MdOutlineCopyright} from 'react-icons/Md'

function Footer() {
  return (
    <div className='footer-container'>
        <div className='left-footer-container'>
            <p>About Us</p>
            <p>Terms & Conditions</p>
            <p>Privacy & Cookie Policies</p>
        </div>
        <div className='right-footer-container'>
            <p>2022</p>
            <div className='copy-container'>
            <MdOutlineCopyright className='c-icon'/><p>UniLife</p>
            </div>
        </div>
    </div>
  )
}

export default Footer