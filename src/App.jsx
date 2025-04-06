import Footer from "./components/footer/footer/footer";
import Footerbanner from "./components/footer/foterbanner.jsx/footerbanner";
import Completeheader from "./components/header/completeheader/completeheader";
import Imagelogo from "./components/header/imagelogo/imagelogo";
import Linkscontainer from "./components/header/links/linkscontainer/linkscontainer";
import Reuseblelogic from "./components/header/links/reuseablelogic/reuseblelogic";
import Logincontainer from "./components/header/logincontainer/logincontainer";
import All from "./components/maincontainer/databycategorywise/all/all";
import Allcategory from "./components/maincontainer/databycategorywise/allcotegory/allcategory";
import Categoryitems from "./components/maincontainer/databycategorywise/allcotegory/categoryitems/categoryitems";
import Serachbycategorylogo from "./components/maincontainer/databycategorywise/allcotegory/serchbycotegorylogo/Serachbycategorylogo";
import Electranic from "./components/maincontainer/databycategorywise/electronic/Electranic";
import Eyewear from "./components/maincontainer/databycategorywise/Eyewear/Eyewear";
import Jewelry from "./components/maincontainer/databycategorywise/jewelry/Jewelry";
import Men from "./components/maincontainer/databycategorywise/men/men";
import Perfume from "./components/maincontainer/databycategorywise/perfume/perfume";
import Routers from "./components/maincontainer/databycategorywise/router/router";
import Shoes from "./components/maincontainer/databycategorywise/shoes/shoes";
import Toys from "./components/maincontainer/databycategorywise/toys/toys";
import Women from "./components/maincontainer/databycategorywise/women/women";
import  DemoCarousel  from "./crouse;/Crousel";

function App() {

  return(
    <>
     
       <Completeheader />
       <DemoCarousel/>
       
      
       <Routers/>
       <Footerbanner/>
       <Footer/>
   
    </> 
    
  )
}

export default App;
