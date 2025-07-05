import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loder from '../../../reauseblecomponet/loder/Loder';
import Ultrasonic_Humidifier from '../bags/bags';
import Dehumidifires from '../electronic/Electranic';
import Desiccant_Dehumidifier from '../Eyewear/Eyewear';
import Industrial_Dehumidifier from '../jewelry/Jewelry';
import Databyname from '../../databyname/Databyname';
import ThankYouPage from '../../../footer/foterbanner.jsx/Thankyoupage';
import MainLayout from '../../../layout/Mainlayout';
import InteroductionContainer from '../../interoduction/Interoductioncontainer/InteroductionContainer';
import VideoReusable from '../../../reauseblecomponet/videoreuseblecomponents/Videoresuseble';
import Footerbanner from '../../../footer/foterbanner.jsx/footerbanner';
import SupplierInfoModal from '../../../footer/foterbanner.jsx/Supplayerinfomodel';
import ADDProductForm from '../../addproducts/Addproducts';
import Ceiling_Mounted_Dehumidifier from '../perfume/perfume';
import Refrigerated_Type_Compressed_Air_Dryer from '../shoes/shoes';
import Electric_Humidifier from '../toys/toys';
import Pharmaceutical_dehumidifiern from '../women/women';

// Lazy loaded components


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
    <Suspense fallback={<Loder />}>
     <MainLayout>
       <Routes>
        <Route path="/" element={<Allcategory />} />
        <Route path="/Ultrasonic_Humidifier" element={<Ultrasonic_Humidifier />} />
        <Route path="/Dehumidifires" element={<Dehumidifires />} />
        <Route path="/Desiccant_Dehumidifier" element={<Desiccant_Dehumidifier />} />
        <Route path="/Industrial_Dehumidifier" element={<Industrial_Dehumidifier />} />
        <Route path="/perfume" element={<Perfume />} />
        <Route path="/jewelry" element={<Jewelry />} />
        <Route path="/Refrigerated_Type_Compressed_Air_Dryer" element={<Refrigerated_Type_Compressed_Air_Dryer/>} />
        <Route path="/Electric_Humidifier" element={<Electric_Humidifier/>} />
        <Route path="/Eyewear" element={<Eyewear />} />
        <Route path="/all" element={<All />} />
        <Route path="/productdetails/:id" element={<Productdetails />} />
        <Route path="/search" element={<Databysearch />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userdetails" element={<Userdetail />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/linksm" element={<Linksformobile />} />
        <Route path='/databyname/:name' element={<Databyname/>}/>
        <Route path='/thankyou' element={<ThankYouPage/>} />
         <Route path='/thankyous' element={<ThankYouPage/>} />
        <Route path='/introduction' element={<InteroductionContainer/>}/>
        <Route path='/showvideo/:id/:hedding' element={<VideoReusable/>}/>
        <Route path='/sellerinfo' element={<Footerbanner/>}/>
        <Route path="/email" element={<SupplierInfoModal/>}/>
        <Route path='/Addproducts' element={<ADDProductForm/>}/>
        <Route path='/Ceiling_Mounted_Dehumidifier' element={<Ceiling_Mounted_Dehumidifier/>}/>
        <Route path='/Electric_Humidifier' element={<Electric_Humidifier/>}/>
        <Route path='/pharmaceutical_dehumidifiern' element={<Pharmaceutical_dehumidifiern/>}/>
      </Routes>
     </MainLayout>
    </Suspense>
  );
}
