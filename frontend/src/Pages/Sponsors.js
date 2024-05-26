// Sponsors.js
import React, { useState, useEffect } from 'react';
import SearchBar from '../Components/SearchBar';
import SponsorsTable from '../Components/SponsorsTable';
import Header from '../Components/Header';
import '../css/Comp.css';
import axios from 'axios';

export default function Sponsors  () {
  const [sponsors, setSponsors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSponsors, setFilteredSponsors] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/sponsors/getAllSponsor"); 
        const data = response.data;
        setSponsors(data);
        console.log(data);
        setFilteredSponsors(data);
      } catch (error) {
        console.error('Error fetching sponsors:', error);
      }
    };

   fetchSponsors();
  }, []);

  useEffect(() => {
    const results = sponsors.filter(sponsor =>
      sponsor.company.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
    setFilteredSponsors(results);
  }, [searchTerm, sponsors]);

  return (
    <div className={`attendees-page ${darkMode ? 'dark' : ''}`}>
      <Header/>
      <h1>Sponsors</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <SponsorsTable sponsors={filteredSponsors} />
    </div>
  );
};

