import React from 'react'
import {MdHomeFilled} from 'react-icons/md'
import {MdSearch} from 'react-icons/md'
import {MdSegment} from 'react-icons/md'
import {MdPersonSearch} from 'react-icons/md'
import {MdBusiness, MdMessage,MdNotifications,MdPerson} from 'react-icons/md'
import './Navbar.css'



const Navbar = () => {

   

   return(
    <div className='Mainwrapper-navbar'>
        <div className='btn'>
        <MdHomeFilled size={25}/>
        <p>Home</p>
        </div>
        <div className='btn'>
            <MdPersonSearch size={25}/>
            <p>Networks</p>
        </div>    
        <div className='btn'>
            <MdBusiness size={25}/>
            <p>Jobs</p>
        </div>
        <div className='btn'>
            <MdMessage size={25}/>
            <p>Messaging</p>
        </div>
        <div className='btn'>
            <MdNotifications size={25}/>
            <p>Notifications</p>
        </div>
        <div className='btn'>
            <MdPerson size={25}/>
            <p>Me</p>
        </div>
    </div>
   )
 
}

export default Navbar