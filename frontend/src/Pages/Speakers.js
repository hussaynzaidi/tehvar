// Speakers.js
import React, { useState, useEffect } from 'react';
import SearchBar from '../Components/SearchBar';
import SpeakerTable from '../Components/SpeakerTable';
import Header from '../Components/Header';
import '../css/Comp.css';
import axios from 'axios';

export default function Speakers  () {
  const [speakers, setSpeakers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSpeakers, setFilteredSpeakers] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/speaker/getAllSpeaker"); 
        const data = response.data;
        setSpeakers(data);
        setFilteredSpeakers(data);
      } catch (error) {
        console.error('Error fetching attendees:', error);
      }
    };

   fetchSpeakers();
  }, []);

  useEffect(() => {
    const results = speakers.filter(speaker =>
      speaker.fname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      speaker.lname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      speaker.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSpeakers(results);
  }, [searchTerm, speakers]);

  return (
    <div className={`attendees-page ${darkMode ? 'dark' : ''}`}>
      <Header/>
      <h1>Speakers</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <SpeakerTable speakers={filteredSpeakers} />
    </div>
  );
};

