import { useLocation } from 'react-router-dom';
import Footer from "./components/footer/footer/footer";
import Footerbanner from "./components/footer/foterbanner.jsx/footerbanner";
import Completeheader from "./components/header/completeheader/completeheader";
import DemoCarousel from "./crouse;/Crousel";
import Routers from "./components/maincontainer/databycategorywise/router/router";
import Userdetail from './components/auth/userdetails/userdetail';
import ProductInquiryCard from './components/reauseblecomponet/productenquirycard/Productenquirycard';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const location = useLocation(); // 👈 yeh location object deta hai

  return (
    <>
      <Completeheader />

      
      {location.pathname === '/' && <DemoCarousel />}
    

      <Routers />
      {location.pathname === '/' && <Footerbanner />}
      <Footer />
        <ToastContainer   position="top-center"
  reverseOrder={false} />
     
    </>
  );
}

export default App;
