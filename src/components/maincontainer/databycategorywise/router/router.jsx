import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Bags from '../bags/bags'
import Electranic from '../electronic/Electranic'
import Men from '../men/men'
import Women from '../women/women'
import Perfume from '../perfume/perfume'
import Jewelry from '../jewelry/Jewelry'
import Shoes from '../shoes/shoes'
import Toys from '../toys/toys'
import Eyewear from '../Eyewear/Eyewear'
import All from '../all/all'
import Allcategory from '../allcotegory/allcategory'
import Productdetails from '../../productdetails/productdetails'
import Databysearch from '../../databysearch/databysearch'
import Contextwrapper from '../../../../context/contextwrapper'

export default function Routers() {
  return (
    <div>
    
    <Routes>
        <Route  path='/bags' element={<Bags/>}/>
        <Route  path='/electronics' element={<Electranic/>}/>
        <Route  path='/men' element={<Men/>}/>
        <Route  path='/women' element={<Women/>}/>
        <Route  path='/perfume' element={<Perfume/>}/>
        <Route  path='/jewelry' element={<Jewelry/>}/>
        <Route  path='/shoes' element={<Shoes/>}/>
        <Route  path='/toys' element={<Toys/>}/>
        <Route  path='/Eyewear' element={<Eyewear/>}/>
        <Route  path='/all' element={<All/>}/>
        <Route path='/' element={<Allcategory/>}/>
        <Route  path='/productdetails/:id' element={<Productdetails/>} />
        <Route  path='/search' element={<Databysearch/>}/>
      </Routes>
   

    </div>
  )
}
