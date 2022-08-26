import React from 'react'
import {FaBars} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar(){

  return (
    <>
        <nav>
            <input type='checkbox' id='click'></input>
            <label htmlFor='click' className='checkbtn' id='icon'>
                <FaBars />
            </label>
            <label className='logo'><span>Cy</span>duck</label>
            <ul>
                <li>
                  <NavLink to="/home" activeclassname='active'>Home</NavLink>
                </li>
                <li>
                  <NavLink  to='/dashboard' activeclassname='active'>Dashboard</NavLink>
                </li>
                <li>
                  <NavLink  to='/notification' activeclassname='active'>Notifications</NavLink>
                </li>
             
                <li>
                  <NavLink  to='/contact' activeclassname='active'>Contact Us</NavLink>
                </li>
                
            </ul>
        </nav>
    </>
  )
}

export default Navbar;