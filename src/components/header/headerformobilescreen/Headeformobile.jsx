import React from 'react'
import Searchbar from '../serchbar/searchbar'
import Imagelogo from '../imagelogo/imagelogo'
import { FaAlignCenter } from 'react-icons/fa'
import { FaAlignJustify } from 'react-icons/fa6'
import { icons } from './helpercode'
import { Link, useNavigate } from 'react-router-dom'
import './headerformobile.css'
export default function Headeformobile() {

  const navigate  = useNavigate();
  return (
    <>
    <div className='allheadermobile'>
      
      <div className='firstcontainer'>

      <div className='fi'>
       <div className='lineicon' onClick={()=> navigate('/linksm')}>
        <FaAlignJustify/>
       </div>
       <Imagelogo/>
      </div> 
      <div className='s1'> 
       {icons.map((item)=>{
        return <div key={item.path} className='iconsc'>
            <Link to={item.path}>{item.icon}</Link>
        </div>
       })}
      </div> 
      </div> 
      <div className='secondcontainer'>
         <Searchbar/>
      </div>
    </div>
    </>
  )
}
