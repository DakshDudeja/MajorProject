import React from 'react'
import Navbar from './Navbar'
import './ContactUs.css'
import { FaFacebookF } from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import shape from "./img/shape.png"
import Email from "./img/email.png"
import Location from "./img/location.png"
import Phone from "./img/phone.png"


function ContactUs(){

    function focusElemnt(event){
        event.target.classList.add('focus');
    }


  return (
    <>
        <Navbar />
        <div className='contact-container'>
            <span className='big-circle'></span>
            <img src={shape} className='square'></img>
            <div className='form'>
                <div className='contact-info'>
                    <h3 className='title'>Let's get in touch</h3>
                    <p className='text'>asjfaonkdl asjkbfjasnasbo fjfasnofna lanfjlsn klajnfl</p>
                    <div className='info'>
                        <div className='information'>
                            <img src={Location} className='icon'></img>
                            <p>MAIT, Rohini, Sector-22, Delhi-110086</p>
                        </div>
                        <div className='information'>
                            <img src={Email} className='icon'></img>
                            <p>mait123@mait.ac.in</p>
                        </div>
                        <div className='information'>
                            <img src={Phone} className='icon'></img>
                            <p>+91-99995-99995</p>
                        </div>
                    </div>
                    <div className='social-media'>
                        <p>Connect with us :</p>
                        <div className='social-icons'>
                            <a href='#'>
                                <FaFacebookF />
                            </a>
                            <a href='#'>
                                <FaLinkedinIn />
                            </a>
                            <a href='#'>
                                <FaInstagram />
                            </a>
                            <a href='#'>
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='contact-form'>
                    <span className='circle one'></span>
                    <span className='circle two'></span>

                    <form action='index.html'>
                        <h3 className='contact-title'>Contact Us</h3>
                        <div className='input-container'>
                            <input onChange={(event)=>{focusElemnt(event)}} type='text' name='name' className='contact-input'></input>
                            <label htmlFor=''>Username</label>
                            <span>Username</span>
                        </div>
                        <div className='input-container'>
                            <input onFocus={(event)=>{focusElemnt(event)}} type='email' name='email' className='contact-input'></input>
                            <label htmlFor=''>Email</label>
                            <span>Email</span>
                        </div>
                        <div className='input-container'>
                            <input onChange={(event)=>{focusElemnt(event)}} type='tel' name='phone' className='contact-input'></input>
                            <label htmlFor=''>Phone</label>
                            <span>Phone</span>
                        </div>
                        <div className='input-container textarea'>
                            <textarea onChange={(event)=>{focusElemnt(event)}} name='message' className='contact-input'></textarea>
                            <label htmlFor=''>Message</label>
                            <span>Message</span>
                        </div>
                        <input type='submit' value='Send' className='form-submit-btn'></input>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactUs