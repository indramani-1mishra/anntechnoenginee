import React from 'react'
//import { menuData } from './helpercode'
import './reuseblelogic.css';
import { Link } from 'react-router-dom';
function   Reuseblelogic({menuData}) {

   
  return (
    <div className='allcontainer'>
       {menuData.map((section)=>
        {
            return <div key={section.category} className='container3'>
                <h4>{section.category}</h4>
                <ul className='ulcs'>
                    {section.items.map((item,index)=>
                    {
                        return <li key={index} className='liste'><Link to="/">{item}</Link></li>
                    })}
                </ul>
            </div>
        }
       )}
    </div>
  )
}

export default Reuseblelogic
