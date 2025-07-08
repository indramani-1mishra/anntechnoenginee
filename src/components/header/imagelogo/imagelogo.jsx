import React from 'react';
import './image.css';

export default function Imagelogo() {
  const img ='https://5.imimg.com/data5/SELLER/Logo/2025/6/519657378/CO/VL/BQ/108774879/logo-with-india-map-90x90.png';
  return (
    <div className='image-container'>
      <img src={img} className='imgs' alt='imagelogo' />
    </div>
  );
}
