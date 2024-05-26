// staff.js
import React, { useState, useEffect } from 'react';
import SearchBar from '../Components/SearchBar';
import StaffTable from '../Components/StaffTable';
import Header from '../Components/Header';
import '../css/Comp.css';
import axios from 'axios';

export default function Staff  () {
  const [staff, setStaff] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStaff, setFilteredStaff] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/staff/getAllStaff"); 
        const data = response.data;
        setStaff(data);
        setFilteredStaff(data);
      } catch (error) {
        console.error('Error fetching staff:', error);
      }
    };

   fetchStaff();
  }, []);

  useEffect(() => {
    const results = staff.filter(staff =>
      staff.fname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.lname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStaff(results);
  }, [searchTerm, staff]);

  return (
    <div className={`attendees-page ${darkMode ? 'dark' : ''}`}>
      <Header/>
      <h1>Staff</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <StaffTable staff={filteredStaff} />
    </div>
  );
};

