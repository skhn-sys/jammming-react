import React, { useState } from 'react';
import './Track.css';


function Track({ track, onAdd, onRemove, isRemoval }) {
  const handleClick = () => {
    if (isRemoval) {
      onRemove(track);
    } else {
      onAdd(track);
    }
  };

  return (
    <div className="Track">
      <div className="Track-info">
        <h3>{track.name}</h3>
        <p>{track.artists.map(artist => artist.name).join(', ')}</p>
      </div>
      <button className="Track-action" onClick={handleClick}>
        {isRemoval ? '-' : '+'}
      </button>
    </div>
  );
}


export default Track;
