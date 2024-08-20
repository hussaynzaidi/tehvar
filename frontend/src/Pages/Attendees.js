// Attendees.js
import React, { useState, useEffect } from 'react';
import SearchBar from '../Components/SearchBar';
import AttendeeTable from '../Components/AttendeeTable';
import Header from '../Components/Header';
import '../css/Comp.css';
import axios from 'axios';
import { useAuthContext } from '../Hooks/useAuthContext';

export default function Attendees  () {
  const [attendees, setAttendees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAttendees, setFilteredAttendees] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const { user } = useAuthContext()

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    const fetchAttendees = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/attendee/getAllAttendee",
          {headers: {
          'Authorization' : `Bearer ${user.token}`,
          },
      }); 
        const data = response.data;
        setAttendees(data);
        setFilteredAttendees(data);
      } catch (error) {
        console.error('Error fetching attendees:', error);
      }
    };

   if(user) {fetchAttendees();}
  }, [user]);

  useEffect(() => {
    const results = attendees.filter(attendee =>
      attendee.fname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      attendee.lname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      attendee.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAttendees(results);
  }, [searchTerm, attendees]);

  return (
    <div className={`attendees-page ${darkMode ? 'dark' : ''}`}>
      <Header/>
      <h1>Attendees</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <AttendeeTable attendees={filteredAttendees} />
    </div>
  );
};

