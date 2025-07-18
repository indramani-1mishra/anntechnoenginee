import React from 'react';
import './image.css';
import img from '/imagelogo.jpg';

export default function Imagelogo() {
  
  return (
    <div className='image-container'>
      <img src={img} className='imgs' alt='imagelogo' />
    </div>
  );
}
