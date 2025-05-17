import React, { useContext, useState } from 'react'
import photo from './banner.jpg';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import SearchContext from '../../../context/context';
import { IoCall } from "react-icons/io5";
import { IoIosShareAlt } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { GiSplitCross } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";
import './footerbanner.css'
import SupplierInfoModal from './Supplayerinfomodel';
import Getuserrequirement from '../../reauseblecomponet/getuserrequirement/Getuserrequirement';
export default function Footerbanner() {
const {setshowemail,showemail}= useContext(SearchContext);
  const onclickhandler=()=>{
     const mapurl="https://maps.google.com/?q=28.52578500,77.20798600";
     window.open(mapurl,"blank");
  }
 
 
  return (

    <>
    <div style={{"position":"relative","top":"100px","left":"0","right":"0", "width":"100%", }} className='allcontainer-contact'>
      <div className='contect-first-container' >
        <h1>contect us</h1>
        <div className='allinfos'>
          <div className='infos'>
          <p className='iconp'><FaMapMarkerAlt fontSize="27px"/></p>
          <p className='iconsinfo' >Ashish Kumar Nayak (Owner)
          
           ANN Techno Engineer
        H. No. 840/2, 0, Chirag Delhi Primary School Near Shiv Mandir
         New Delhi - 110017, Delhi, India<button onClick={onclickhandler}>Get Directions <FaArrowRight/></button></p></div>
         <div className='infos' onClick={()=>setshowemail(!showemail)}>
         <p className='iconp'><HiOutlineMail fontSize="27px"/></p>
         <p className='iconsinfo'>Send Email</p></div>
        <div className='infos'>
         <a href="tel:08851148551" className="infos l" >
        <p className="iconp"><IoCall fontSize="27px" /></p>
          <p className="iconsinfo">+918851148551</p>
         </a>
 
         </div>
         
         
        <div className='infos'>
          <p className='iconp'><IoIosShareAlt fontSize="27px"/></p>
        <p><span><FaFacebookF/></span>
        <span><FaLinkedinIn/></span>
        <span><FaLinkedinIn/></span>
       <span><GiSplitCross/></span>
        </p>
        </div>
        </div>
      </div>
      
         <Getuserrequirement/> 
           </div>
        
     
    

   {
    showemail && <SupplierInfoModal/>
    
   }
    </>
  )
}
