import React from 'react'
import { menuItems1, menuItems2 } from './helpercode1'
import { Link } from 'react-router-dom'
import './logincontainer.css'
export default function Logincontainer() {
  return (
    <div className='allloginconatainer'>
      <div className='loginbox'>
        <h4>welcome </h4>
        <p className='p2'>To access account and manage orders</p>
         <span><button>login</button>/<button>sign up</button></span>
      </div>
      <div className='loginbox'>
      {menuItems1.map((item)=>{return(
        <p key={item.index}><Link to={item.link}>{item.name}</Link></p>
      )})}
      </div>
      <div className='loginbox'>
      {menuItems2.map((item)=>{return(
        <p key={item.index}><Link to={item.link}>{item.name}</Link></p>
      )})}
      </div>
    </div>
  )
}
