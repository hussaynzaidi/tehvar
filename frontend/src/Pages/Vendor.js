import React, { useState } from 'react';
import Header from '../Components/Header';
import '../css/Comp.css';

export default function Vendor  () {
const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div className={`attendees-page ${darkMode ? 'dark' : ''}`}>
      <Header/>
      <h1>Vendors Page</h1>
    </div>
  );
};

