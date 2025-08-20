import React, { useState } from 'react';
import './Playlist.css';

function Playlist({ playlistTracks, onAdd, onRemove, onNameChange, onSave }) {
  const handleNameChange = (event) => {
    onNameChange(event.target.value);
  };

  return (
    <div className="Playlist">
      <input 
        type="text" 
        value={playlistTracks.name} 
        onChange={handleNameChange} 
        placeholder="New Playlist Name" 
      />
      <ul>
        {playlistTracks.map(track => (
          <li key={track.id} className="PlaylistTrack">
            <div className="TrackInfo">
              <h3>{track.name}</h3>
              <p>{track.artists.map(artist => artist.name).join(', ')}</p>
            </div>
            <button onClick={() => onRemove(track)}>Remove</button>
          </li>
        ))}
      </ul>
      <button className="Playlist-save" onClick={onSave}>SAVE TO SPOTIFY</button>
    </div>
  );
}
export default Playlist;