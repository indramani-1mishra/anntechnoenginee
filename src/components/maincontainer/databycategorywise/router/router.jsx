import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loder from '../../../reauseblecomponet/loder/Loder';
import MainLayout from '../../../layout/Mainlayout';

// ✅ Lazy load all components
const Ultrasonic_Humidifier = lazy(() => import('../bags/bags'));
const Dehumidifires = lazy(() => import('../electronic/Electranic'));
const Desiccant_Dehumidifier = lazy(() => import('../Eyewear/Eyewear'));
const Industrial_Dehumidifier = lazy(() => import('../jewelry/Jewelry'));
const Ceiling_Mounted_Dehumidifier = lazy(() => import('../perfume/perfume'));
const Refrigerated_Type_Compressed_Air_Dryer = lazy(() => import('../shoes/shoes'));
const Electric_Humidifier = lazy(() => import('../toys/toys'));
const Pharmaceutical_dehumidifiern = lazy(() => import('../women/women'));

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
const Databyname = lazy(() => import('../../databyname/Databyname'));
const ThankYouPage = lazy(() => import('../../../footer/foterbanner.jsx/Thankyoupage'));
const InteroductionContainer = lazy(() => import('../../interoduction/Interoductioncontainer/InteroductionContainer'));
const VideoReusable = lazy(() => import('../../../reauseblecomponet/videoreuseblecomponents/Videoresuseble'));
const Footerbanner = lazy(() => import('../../../footer/foterbanner.jsx/footerbanner'));
const SupplierInfoModal = lazy(() => import('../../../footer/foterbanner.jsx/Supplayerinfomodel'));
const ADDProductForm = lazy(() => import('../../addproducts/Addproducts'));

export default function Routers() {
  return (
    <Suspense fallback={<Loder />}>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Allcategory />} />
          <Route path="/Ultrasonic_Humidifier" element={<Ultrasonic_Humidifier />} />
          <Route path="/Dehumidifires" element={<Dehumidifires />} />
          <Route path="/Desiccant_Dehumidifier" element={<Desiccant_Dehumidifier />} />
          <Route path="/Industrial_Dehumidifier" element={<Industrial_Dehumidifier />} />
          <Route path="/Ceiling_Mounted_Dehumidifier" element={<Ceiling_Mounted_Dehumidifier />} />
          <Route path="/Refrigerated_Type_Compressed_Air_Dryer" element={<Refrigerated_Type_Compressed_Air_Dryer />} />
          <Route path="/Electric_Humidifier" element={<Electric_Humidifier />} />
          <Route path="/pharmaceutical_dehumidifiern" element={<Pharmaceutical_dehumidifiern />} />
          <Route path="/perfume" element={<Perfume />} />
          <Route path="/jewelry" element={<Jewelry />} />
          <Route path="/Eyewear" element={<Eyewear />} />
          <Route path="/all" element={<All />} />
          <Route path="/productdetails/:id" element={<Productdetails />} />
          <Route path="/search" element={<Databysearch />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userdetails" element={<Userdetail />} />
          <Route path="/carts" element={<Carts />} />
          <Route path="/linksm" element={<Linksformobile />} />
          <Route path="/databyname/:name" element={<Databyname />} />
          <Route path="/thankyou" element={<ThankYouPage />} />
          <Route path="/thankyous" element={<ThankYouPage />} />
          <Route path="/introduction" element={<InteroductionContainer />} />
          <Route path="/showvideo/:id/:hedding" element={<VideoReusable />} />
          <Route path="/sellerinfo" element={<Footerbanner />} />
          <Route path="/email" element={<SupplierInfoModal />} />
          <Route path="/Addproducts" element={<ADDProductForm />} />
        </Routes>
      </MainLayout>
    </Suspense>
  );
}
