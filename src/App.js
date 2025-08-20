import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");

    const handleSearch = async (searchInput, searchOption) => {
    try {
      const results = await fetch(`https://api.spotify.com/v1/search?q=${searchInput}&type=track&limit=20`, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_SPOTIFY_ACCESS_TOKEN}`
        }
      });
      const data = await results.json();
      setSearchResults(data.tracks.items);
    } catch (error) {
      console.error("Error fetching search results:", error);
    };
    };
  const handleAddTrack = (track) => {
    if (!playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      setPlaylistTracks(prevTracks => [...prevTracks, track]);
    }
  };
  const handleRemoveTrack = (track) => {
    setPlaylistTracks(prevTracks => prevTracks.filter(savedTrack => savedTrack.id !== track.id));
  };
  const handleNameChange = (event) => {
    setPlaylistName(event.target.value);
  };
  const handleSave = () => {
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src='./img1.png' className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Jammming</h1>
        <p className="App-intro">
          Discover and create playlists with ease.
        </p>
        
          <SearchBar onSearch={handleSearch} />

      </header>
      <main className="App-main">
        <div className="App-results">
          <h2> Results</h2>
          <SearchResults 
            searchResults={searchResults} 
            onAdd={handleAddTrack} 
            onRemove={handleRemoveTrack}
        />      </div>

        <div className="App-playlist">
          <h2>Current Playlist</h2>
          <input 
            value={playlistName} 
            onChange={handleNameChange} 
            placeholder="New Playlist Name"/>
          <Playlist 
            playlistName={playlistName} 
            playlistTracks={playlistTracks} 
            onNameChange={handleNameChange} 
            onRemove={handleRemoveTrack} 
            onSave={handleSave}/>
            <input 
            value={playlistName} 
            onChange={handleNameChange} 
            placeholder="New Playlist Name"/>
          <button className="App-save">Save to Spotify</button>
      </div>
      </main>
      <footer className="App-footer">
        <p>&copy; 2025 Jammming. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
