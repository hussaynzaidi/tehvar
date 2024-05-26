// artists.js
import React, { useState, useEffect } from 'react';
import SearchBar from '../Components/SearchBar';
import ArtistTable from '../Components/ArtistTable';
import Header from '../Components/Header';
import '../css/Comp.css';
import axios from 'axios';

export default function Artists  () {
  const [artists, setArtists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArtists, setFilteredArtists] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/artist/getAllArtist"); 
        const data = response.data;
        console.log(data)
        setArtists(data);
        setFilteredArtists(data);
      } catch (error) {
        console.error('Error fetching artists:', error);
      }
    };

   fetchArtists();
  }, []);

  useEffect(() => {
    const results = artists.filter(artist =>
      artist.fname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artist.genre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredArtists(results);
  }, [searchTerm, artists]);

  return (
    <div className={`attendees-page ${darkMode ? 'dark' : ''}`}>
      <Header/>
      <h1>Artists</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <ArtistTable artists={filteredArtists} />
    </div>
  );
};

