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
import Signup from '../../../auth/signup/signup'
import Login from '../../../auth/login/login'
import Userdetail from '../../../auth/userdetails/userdetail'
import Addtocart from '../../carts/addtocarts/carts'
import Carts from '../../carts/addtocarts/carts'
import Linksformobile from '../../../header/completeheader/linksformobile/Linksformobile'

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
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/userdetails'element={<Userdetail/>}/>
        <Route path='/carts'element={<Carts/>}/>
        <Route path='/linksm' element={<Linksformobile/>}/>
      </Routes>
   

    </div>
  )
}
