import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import './searchbar.css'


export default function Searchbar() {
  return (
    <div className='searchconatainer'>
       <span> <IoIosSearch style={{font:"25px",fontSize:"17px",color:"black"}} /></span>
      <input type='text' placeholder='search for product brands  and more'/>
    </div>
  )
}
