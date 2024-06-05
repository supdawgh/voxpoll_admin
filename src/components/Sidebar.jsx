import React from 'react'
import logo from '../assets/logo2.png'
import '../styles/sidebar.css'
import {BiBookAlt, 
    BiHelpCircle, 
    BiHome,
    BiMessage,
    BiSolidReport,
    BiStats,
    BiTask} from 'react-icons/bi';
const Sidebar = () => {
  return (
    <div className='menu'>
        <div className='logo'>
            <img src={logo}className='logo-icon'alt=''/>
        </div>
      <div className='menu--list'>
        <a href='#' className='item active'>
            <BiHome className='icon'/>
            Dashboard
        </a>
        <a href='#' className='item'>
            <BiTask className='icon'/>
            Name List
        </a>
        <a href='#' className='item'>
            <BiSolidReport className='icon'/>
            Vote Count
        </a>
        <a href='#' className='item'>
            <BiStats className='icon'/>
            Result
        </a>
        <a href='#' className='item'>
            <BiMessage className='icon'/>
            Message   
         </a>
         <a href='#' className='item'>
            <BiHelpCircle className='icon'/>
            Help 
        </a>
      </div>
    </div>
  )
}

export default Sidebar
