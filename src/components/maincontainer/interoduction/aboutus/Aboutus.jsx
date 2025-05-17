import React from 'react';
import { companyIntroduction } from '../helpercodeforintroduction/aboutus';
import { FaArrowRight } from "react-icons/fa";
import './Aboutus.css';
import Formoreinfo from '../formoreinfo/Formoreinfo';

export default function Aboutus() {
  return (
    <div className="aboutus-container">
      <div className="aboutus-text">
        {companyIntroduction.map((item, index) => (
          <p key={index}><FaArrowRight className="arrow-icon" /> {item}</p>
        ))}
         <Formoreinfo/>
      </div>
      <div className="aboutus-image-container">
        <img src='/annlogo.webp' alt='logo' loading='lazy' className="aboutus-logo" />
      </div>
     
    </div>
    
  );
}
