import React, { useState } from 'react';
import Header from '../Components/Header';
import '../css/Comp.css';

export default function Room  () {
    const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`attendees-page ${darkMode ? 'dark' : ''}`}>
      <Header/>
      <h1>Room Page</h1>
    </div>
  );
};

