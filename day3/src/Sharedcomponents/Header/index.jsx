import React from 'react'
import Navbar from './Navbar'
import './Header.css'
import Searchbar from './Searchbar'


const Header = () => {
    
  return (
    <div className='Mainwrapper'>
        <Searchbar/>
        <Navbar/>
    </div>
  )
}

export default Header