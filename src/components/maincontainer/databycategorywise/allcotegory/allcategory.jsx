import React from 'react'
import './allcategory.css'
import Serachbycategorylogo from './serchbycotegorylogo/Serachbycategorylogo'
import Categoryitems from './categoryitems/categoryitems'
import Videocontainer from '../../interoduction/videocontroller/Videocontainer'
import Certificatecontainer from '../../interoduction/certificatecontainer/Certificatecontainer'
export default function Allcategory() {
  return (
    <>
       <Serachbycategorylogo/>
        <Categoryitems/>
       <div style={{position:"relative", top:"60px"}}>
      <Videocontainer/>
       </div>
       <div  style={{position:"relative", top:"60px"}}>
        <h1 >Our Certificates</h1>
        <Certificatecontainer/>
       </div>
    </>
  )
}
