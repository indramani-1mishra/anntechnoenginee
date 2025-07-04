import React, { useEffect } from 'react';
import './videoReusable.css';
import Formoreinfo from '../../maincontainer/interoduction/formoreinfo/Formoreinfo';
import { useParams } from 'react-router-dom';

export default function VideoReusable() {
  const { id, hedding } = useParams();
  useEffect(() => {
    // Page top par scroll ho
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
 
  
  return (
    
        <div className="video-card2">
      <div className="video-wrapper">
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title={decodeURIComponent(hedding)}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <h2 className="video-heading">{decodeURIComponent(hedding)}</h2>
      <Formoreinfo />
    </div>
   
  );
}
