import React, { useContext } from 'react'
import SearchContext from '../../../../context/context'
import { FaArrowRight } from "react-icons/fa";
import '../whyuse/Whyuse.css'
import SupplierInfoModal from '../../../footer/foterbanner.jsx/Supplayerinfomodel';
export default function Formoreinfo() {
    const {showemail,setshowemail} = useContext(SearchContext);
  return (
    <>
              <div className="whyuse-contact">
                <p>For more information <FaArrowRight className="list-icon" /></p>
                <button onClick={() => setshowemail(true)} className="contact-button">Contact Us</button>
              </div>
              {showemail && <SupplierInfoModal/>}
    </>
  )
}
