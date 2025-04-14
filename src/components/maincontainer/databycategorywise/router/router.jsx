import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loder from '../../../reauseblecomponet/loder/Loder';

// Lazy loaded components
const Bags = lazy(() => import('../bags/bags'));
const Electranic = lazy(() => import('../electronic/Electranic'));
const Men = lazy(() => import('../men/men'));
const Women = lazy(() => import('../women/women'));
const Perfume = lazy(() => import('../perfume/perfume'));
const Jewelry = lazy(() => import('../jewelry/Jewelry'));
const Shoes = lazy(() => import('../shoes/shoes'));
const Toys = lazy(() => import('../toys/toys'));
const Eyewear = lazy(() => import('../Eyewear/Eyewear'));
const All = lazy(() => import('../all/all'));
const Allcategory = lazy(() => import('../allcotegory/allcategory'));
const Productdetails = lazy(() => import('../../productdetails/productdetails'));
const Databysearch = lazy(() => import('../../databysearch/databysearch'));
const Signup = lazy(() => import('../../../auth/signup/signup'));
const Login = lazy(() => import('../../../auth/login/login'));
const Userdetail = lazy(() => import('../../../auth/userdetails/userdetail'));
const Carts = lazy(() => import('../../carts/addtocarts/carts'));
const Linksformobile = lazy(() => import('../../../header/completeheader/linksformobile/Linksformobile'));

export default function Routers() {
  return (
    <Suspense fallback={<Loder/>}>
      <Routes>
        <Route path='/' element={<Allcategory />} />
        <Route path='/bags' element={<Bags />} />
        <Route path='/electronics' element={<Electranic />} />
        <Route path='/men' element={<Men />} />
        <Route path='/women' element={<Women />} />
        <Route path='/perfume' element={<Perfume />} />
        <Route path='/jewelry' element={<Jewelry />} />
        <Route path='/shoes' element={<Shoes />} />
        <Route path='/toys' element={<Toys />} />
        <Route path='/Eyewear' element={<Eyewear />} />
        <Route path='/all' element={<All />} />
        <Route path='/productdetails/:id' element={<Productdetails />} />
        <Route path='/search' element={<Databysearch />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/userdetails' element={<Userdetail />} />
        <Route path='/carts' element={<Carts />} />
        <Route path='/linksm' element={<Linksformobile />} />
      </Routes>
    </Suspense>
  );
}
