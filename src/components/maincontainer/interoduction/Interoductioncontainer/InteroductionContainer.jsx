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
        <Interoductionreuseble heading="ISO Certification"
         para="Our ISO Certificate"
           image="/isocerticate.webp" 
         />
         <Interoductionreuseble
            heading="Awards and Achievements"
            para="CE certificate"
            image='/certificate2.webp'
         />
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
