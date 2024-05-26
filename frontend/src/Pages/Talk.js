import React, { useState } from 'react';
import Header from '../Components/Header';
import '../css/Comp.css';

export default function Talk  () {
  
    const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`attendees-page ${darkMode ? 'dark' : ''}`}>
      <Header/>
      <h1>Talk Page</h1>
    </div>
  );
};

