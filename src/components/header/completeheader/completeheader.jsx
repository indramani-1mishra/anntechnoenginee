import React from 'react'
import Imagelogo from '../imagelogo/imagelogo'
import Linkscontainer from '../links/linkscontainer/linkscontainer'
import './header.css'
import Searchbar from '../serchbar/searchbar'
import Logocontainer from '../logocontainer/Logocontainer'

export default function Completeheader() {
  return (
    <div className='allheaderconatainer'>
      <Imagelogo />
      <Linkscontainer/>
      <Searchbar />
      <Logocontainer/>
    </div>
    
  )
}
