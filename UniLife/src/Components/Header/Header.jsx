import React, {useState} from 'react'
import './Header.css'
import {BiBuildingHouse, BiMoon, BiSun} from'react-icons/Bi'
import {AiOutlineHeart} from 'react-icons/Ai'
import {CiMail} from 'react-icons/Ci'
import { Link } from 'react-router-dom'




function Header() {
     //create state for darkMode
     const [darkMode, setDarkMode] = useState(false)   


  return (
    <div className={darkMode ?"header-container":"header-container header-light" }>
    <Link className="logo" to="/"><BiBuildingHouse />UniLife</Link>


    <div className="header-buttons-container">
      <div className="theme-button-container">

           {
              darkMode 
              ? <div className="theme-buttons">
                  <BiSun onClick={()=> setDarkMode(!darkMode)} className="theme-icon "/>
                  <BiMoon className="theme-icon theme-icon-active"/>  
              </div>
              : <div className="theme-buttons">
                  <BiSun className="theme-icon theme-icon-active"/>
                  <BiMoon onClick={()=> setDarkMode(!darkMode)} className="theme-icon"/>  
              </div>
           }






       </div>


      <div className='navbar'>
         <Link className='nav'><AiOutlineHeart className='heart-icon'/>Shortlist</Link>
         <Link className='nav'><CiMail className='mail-icon'/><p>Contact Us</p></Link>
      </div>
    </div>
  </div>
  )
}

export default Header