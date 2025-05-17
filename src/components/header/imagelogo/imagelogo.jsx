import React from 'react'
import './image.css'

export default function Imagelogo() {
    const img ='https://www.anntechno.in/wp-content/uploads/2024/04/logo_2551252_7064038.png'
  return (
    <div className='image-container'>
      <img src={img} className='imgs' />
    </div>
  )
}
