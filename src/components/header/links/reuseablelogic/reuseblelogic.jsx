import React, { useEffect, useState } from 'react'
//import { menuData } from './helpercode'
import './reuseblelogic.css';
import { Link, useNavigate } from 'react-router-dom';
//import axios from 'axios';
function   Reuseblelogic({menuData}) {
   //const [data,setdata]= useState(null);
     const navigate = useNavigate();
  const onclickhandler=async(name)=>
  {
    try{
         
         navigate(`/databyname/${name}`)

    }
    catch(error)
    {
      console.log(error)
    }
  }
 
   
  return (
    <div className='allcontainer'>
       {menuData.map((section)=>
        {
            return <div key={section.category} className='container3'>
                <h4>{section.category}</h4>
                <ul className='ulcs'>
                    {section.items.map((item,index)=>
                    {
                        return <li key={index} className='liste' onClick={()=>onclickhandler(item.name)}>{item.name}</li>
                    })}
                </ul>
            </div>
        }
       )}
    </div>
  )
}

export default Reuseblelogic
