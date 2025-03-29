import React from 'react'
import './image.css'

export default function Imagelogo() {
    const img ='https://aartisto.com/wp-content/uploads/2020/11/myntra.png'
  return (
    <div className='image-container'>
      <img src={img} />
    </div>
  )
}
