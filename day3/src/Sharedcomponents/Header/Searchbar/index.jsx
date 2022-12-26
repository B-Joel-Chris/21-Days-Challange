import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import './Searchbar.css'

const Searchbar = () => {
  return (
    <div className='Mainwrapper-searchbar'>
        <AiFillLinkedin size={40}/>
        <input type={"text"}></input>     
    </div>
  )
}

export default Searchbar