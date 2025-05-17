import React from 'react';
import './introductionreuseble.css';
import Formoreinfo from '../../maincontainer/interoduction/formoreinfo/Formoreinfo';

export default function Interoductionreuseble({ heading, para, image }) {
  return (
    <div className="intro-container">
      <div className="intro-text">
        <h1>{heading}</h1>
        <p>{para}</p>
        <Formoreinfo/>
      </div>
      <div className="intro-image">
        <img src={image} alt="introduction" loading="lazy" />
      </div>
    </div>
  );
}
