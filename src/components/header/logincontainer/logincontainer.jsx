import React from 'react'
import { menuItems1, menuItems2 } from './helpercode1'
import { Link, useNavigate } from 'react-router-dom'
import './logincontainer.css'
export default function Logincontainer() {
const navigate= useNavigate();

  const onclickhandler=()=>
  {
    navigate('/signup');
  }
  const onclickhandler1=()=>
    {
      navigate('/login');
    }

  return (
    <div className='allloginconatainer'>
      <div className='loginbox'>
        <h4>welcome </h4>
        <p className='p2'>To access account and manage orders</p>
         <span><button onClick={onclickhandler1}>login</button>/<button onClick={onclickhandler}>sign up</button></span>
      </div>
      <div className='loginbox'>
      {menuItems1.map((item)=>{return(
        <p key={item.name}><Link to={item.link}>{item.name}</Link></p>
      )})}
      </div>
      <div className='loginbox'>
      {menuItems2.map((item)=>{return(
        <p key={item.name}><Link to={item.link}>{item.name}</Link></p>
      )})}
      </div>
    </div>
  )
}
