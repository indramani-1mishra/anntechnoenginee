import React from 'react'
import Factsheet from '../factsheet/Factsheet'
import Statutory from '../Statutory_Profile/Statutory'
import Whyuse from '../whyuse/Whyuse'
import Formoreinfo from '../formoreinfo/Formoreinfo'
import Aboutus from '../aboutus/Aboutus'
import Ourteam from '../ourteam/Ourteam'
import Interoductionreuseble from '../../../reauseblecomponet/interoductionshowimagereuseble/Interoductionreuseble'
import Videoresuseble from '../../../reauseblecomponet/videoreuseblecomponents/Videoresuseble'
import VideoCard from '../../../reauseblecomponet/videocard/Videocard'
import Videocontainer from '../videocontroller/Videocontainer'
import ProductInquiryCard from '../../../reauseblecomponet/productenquirycard/Productenquirycard'
import Certificatecontainer from '../certificatecontainer/Certificatecontainer'


export default function InteroductionContainer() {

   
  return (
    <div style={{width:"100%",  position:"relative" ,top:"65px"}}>
  <h1 style={{
  textAlign: 'center',
  padding: '16px 0',
  fontSize: '28px',
  fontWeight: '600',
  color: '#333',
  textTransform: 'uppercase',
  letterSpacing: '0.5px'
}}>
  Introduction
</h1>
        <Factsheet/>
        <Statutory/>
        <Whyuse/>
        <Aboutus/>
        <Ourteam/>
          <Certificatecontainer/>
         <Interoductionreuseble
            heading="Manufacturing Unit"
            para="Manufactureing unit"
            image='/manufeture.webp'
         />
         <Interoductionreuseble
            heading="Our Warehouse"
            para="Our Warehouse Image"
            image='/workplace.webp'
         />
        <Videocontainer/>
        <ProductInquiryCard/>
        
   </div>
  )
}
