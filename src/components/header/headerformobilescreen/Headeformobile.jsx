import React, { useContext } from 'react'
import Searchbar from '../serchbar/searchbar'
import Imagelogo from '../imagelogo/imagelogo'
import { FaAlignCenter } from 'react-icons/fa'
import { FaAlignJustify } from 'react-icons/fa6'
import { icons } from './helpercode'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBagHeart } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom'
import { MdAddIcCall } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdHomeFilled } from "react-icons/md";
import { MdOutlineAddIcCall } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";


import './headerformobile.css'
import SearchContext from '../../../context/context'
import { IoCallOutline } from 'react-icons/io5'
export default function Headeformobile() {

  const navigate  = useNavigate();
  const {showemail,setshowemail}=useContext(SearchContext);
  return (
    <>
    <div className='allheadermobile'>
      
      <div className='firstcontainer'>

      <div className='fi'>
       <div className='lineicon' onClick={()=> navigate('/linksm')}>
        <GiHamburgerMenu/>
       </div>
       <Imagelogo/>
      </div> 
      <div className='s1'> 
       
         <div className='iconsc'>
      <a href="tel:8851148551"><IoCallOutline className='ad'/></a>
    </div>
        <div className='iconsc' onClick={()=>setshowemail(true)}>
           <MdOutlineMailOutline  className='ad'/>
        </div>
        <div className='iconsc'>
          <AiOutlineHeart className='ad' onClick={()=>navigate('/carts')} />
        </div>
         <div className='iconsc'>
          <FaRegUser  className='ad' onClick={()=>navigate('/login')} />
        </div>
       
      </div> 
      </div> 
      <div className='secondcontainer'>
         <Searchbar/>
      </div>
    </div>
    </>
  )
}
