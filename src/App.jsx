import { useLocation } from 'react-router-dom';
import Footer from "./components/footer/footer/footer";
import Footerbanner from "./components/footer/foterbanner.jsx/footerbanner";
import Completeheader from "./components/header/completeheader/completeheader";
import DemoCarousel from "./crouse;/Crousel";
import Routers from "./components/maincontainer/databycategorywise/router/router";



function App() {
  const location = useLocation(); // 👈 yeh location object deta hai

  return (
    <>
      <Completeheader />

      {/* 👇 Carousel only on homepage */}
      {location.pathname === '/' && <DemoCarousel />}
    

      <Routers />
      {location.pathname === '/' && <Footerbanner />}
      <Footer />
    </>
  );
}

export default App;
