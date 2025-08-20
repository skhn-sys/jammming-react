import React, { useState } from 'react';
import './SearchBar.css';
function SearchBar({ onSearch }) {
  const [searchInput, setSearchInput] = useState('');
  const [searchOption, setSearchOption] = useState('track');

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchOptionChange = (event) => {
    setSearchOption(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchInput, searchOption);
  };

  return (
    <div className="SearchBar">
      <form onSubmit={handleSearchSubmit}>
        <input 
          type="text" 
          value={searchInput} 
          onChange={handleSearchChange} 
          placeholder="Enter a song, album, or artist" 
        />
        <select value={searchOption} onChange={handleSearchOptionChange}>
          <option value="track">Track</option>
          <option value="album">Album</option>
          <option value="artist">Artist</option>
        </select>
        <button type="submit">SEARCH</button>
      </form>
    </div>
  );
}


export default SearchBar;
