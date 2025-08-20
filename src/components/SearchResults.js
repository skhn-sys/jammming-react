import React, { useState } from 'react';
import './SearchResults.css';

function SearchResults({ searchResults, onAdd, onRemove }) {
  return (
    <div className="SearchResults">
      <h2>Search Results</h2>
      <ul>
        {searchResults.map(track => (
          <li key={track.id} className="SearchResult">
            <div className="TrackInfo">
              <h3>{track.name}</h3>
              <p>{track.artists.map(artist => artist.name).join(', ')}</p>
            </div>
            <button onClick={() => onAdd(track)}>Add</button>
            <button onClick={() => onRemove(track)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;