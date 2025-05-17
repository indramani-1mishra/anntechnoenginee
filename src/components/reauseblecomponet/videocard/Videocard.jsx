import React from 'react';
import './VideoCard.css';
import Formoreinfo from '../../maincontainer/interoduction/formoreinfo/Formoreinfo';

export default function VideoCard({ thumbnail, title, onclickhandler }) {
  return (
    <div className="video-card" onClick={onclickhandler}>
      <div className="thumbnail-wrapper">
        <img src={thumbnail} alt={title} className="thumbnail" />
        <div className="play-button">&#9658;</div> {/* Play icon */}
      </div>
      <h3 className="video-title">{title}</h3>
      <Formoreinfo/>
    </div>
  );
}
