import React, {useState} from 'react'
import './Header.css'
import {BiBuildingHouse, BiMoon, BiSun, BiMailSend} from'react-icons/bi';
import {AiOutlineHeart} from 'react-icons/ai';
import {CiMail} from 'react-icons/ci'
import { Link } from 'react-router-dom'
import Modal from 'react-modal';
import { Divide as Hamburger } from 'hamburger-react'




function Header() {
     //create state for darkMode
     const [darkMode, setDarkMode] = useState(false)   

      //create state to control modal
      const[isOpen, setIsOpen] = React.useState(false)

      const[open,setOpen] = useState(true)


      const customStyles1 = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          borderRadius: '20px',
          zIndex: '3'
        },
        overlay:{
          backgroundColor: "rgba(0,0,0,.5)"
        }
      };



      



        // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement(document.getElementById('root'));
  



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
         <Link to='/shortlist' ><AiOutlineHeart className='heart-icon'/>  Shortlist</Link> 

         
         <p onClick={() => setIsOpen(true)}><CiMail className='mail-icon'/>  Contact Us</p><Modal
                      isOpen={isOpen}
                      onRequestClose={() => setIsOpen(false)}
                      style={customStyles1}
                      contentLabel="Contact Us"
                  >
                      
                      
                      <div className='modal-header-container'>
                        <div className='modal-header-contact'>
                          <h2>Contact Us</h2>
                          <h3 className='contact-description'>Feel free to contact us if you have any questions.Looking forward to hear from you.</h3>
                        </div>
                          <BiMailSend className='add-home-icon'/>
                          
                      </div>
                      <div className='modal-info'>
                        <div className='modal-form'>
                            <form>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder='Enter your name' />
                                <label htmlFor="phone">Phone Number</label>
                                <input type='phone' id='phone' placeholder='Enter your phone number' />
                                <label htmlFor="select" >Are you a...</label>
                                <select name="select" id="select">
                                  <option selected disabled>. . . .</option>
                                  <option value="Student">Student</option>
                                  <option value="Teacher">Teacher</option>
                                  <option value="Parent">Parent</option>
                                  <option value="Relative">Relative</option>

                                </select>
                            </form>
                        </div>
                        <div className='modal-message'>
                            <form>
                            <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder='Enter your email' />
                                <label htmlFor="message">Message</label>
                                <textarea  id="message" rows="7" placeholder='Enter your message'></textarea>
                                <button type='submit'>Submit</button>
                            </form>
                        </div>
                      </div>

                  </Modal>
      </div>
    </div>
    <div class="menu-container">
    
    {    
        open ?
        
         ( <div className='hamburger-menu'>
          <h4 onClick={() => setOpen(false)}><Hamburger   easing="ease-in" /></h4>
          </div>)
          :
          (<div  className='hamburger-menu-open'>
            <h4 onClick={() => setOpen(true)}><Hamburger   easing="ease-in" /></h4>
            <div className="nav-hamburger">
              <Link to="/ShortList" onClick={() => setOpen(true)}><p><AiOutlineHeart className='heart-icon'/> Shortlist</p></Link>
              <p onClick={() => setIsOpen(true)}><CiMail className='mail-icon'/>  Contact Us</p><Modal
                      isOpen={isOpen}
                      onRequestClose={() => setIsOpen(false)}
                      style={customStyles1}
                      contentLabel="Contact Us"
                  >
                      
                      
                      <div className='modal-header-container'>
                        <div className='modal-header-contact'>
                          <h2>Contact Us</h2>
                          <h3 className='contact-description'>Feel free to contact us if you have any questions.Looking forward to hear from you.</h3>
                        </div>
                          <BiMailSend className='add-home-icon'/>
                          
                      </div>
                      <div className='modal-info'>
                        <div className='modal-form'>
                            <form>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder='Enter your name' />
                                <label htmlFor="phone">Phone Number</label>
                                <input type='phone' id='phone' placeholder='Enter your phone number' />
                                <label htmlFor="select" >Are you a...</label>
                                <select name="select" id="select">
                                  <option selected disabled>. . . .</option>
                                  <option value="Student">Student</option>
                                  <option value="Teacher">Teacher</option>
                                  <option value="Parent">Parent</option>
                                  <option value="Relative">Relative</option>

                                </select>
                            </form>
                        </div>
                        <div className='modal-message'>
                            <form>
                            <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder='Enter your email' />
                                <label htmlFor="message">Message</label>
                                <textarea  id="message" rows="7" placeholder='Enter your message'></textarea>
                                <button type='submit'>Submit</button>
                            </form>
                        </div>
                      </div>

                  </Modal>
            </div>
          </div>)
        }
    </div>
  </div>
  )
}

export default Header