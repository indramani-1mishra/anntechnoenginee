import React from 'react'
import photo from './banner.jpg';

import SearchContext from '../../../context/context';
export default function Footerbanner() {

 
  return (
    <div style={{"position":"relative","top":"60px","left":"0","right":"0", "width":"100%","display":"flex","justifyContent":"center","alignItems":"center"}}>
      <img  src={photo} alt='bannner' style={{"width":"80%"}}/>
    </div>
  )
}
