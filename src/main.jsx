
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Contextwrapper from './context/contextwrapper.jsx'
import axios from "axios";
axios.defaults.withCredentials = true;

createRoot(document.getElementById('root')).render(
<Contextwrapper>
<BrowserRouter>   
<App/>

</BrowserRouter>
</Contextwrapper>
   
  
)
