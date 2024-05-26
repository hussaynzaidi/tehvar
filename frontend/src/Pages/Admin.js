import AdminButtons from "../Components/AdminButtons";
import Budget from "../Components/Budget";
import React, { useState } from 'react';
import '../css/Comp.css';
import icon from '../assets/icon.png';
import Agenda from "../Components/Agenda";
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Admin () {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <header>
        <img src= {icon} style={{maxHeight: '70px', maxWidth: '70px'}}></img>
        <h1>Welcome, Admin!</h1>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          <FontAwesomeIcon icon={faMoon} />
        </button>
      </header>
      <div style={{border: '1px solid', borderRadius: '15px' }}><Budget/></div>
      <div style={{border: '1px solid', borderRadius: '15px', margin: '50px 0px'}}><Agenda/></div>
      <AdminButtons/>
    </div>
  );
};

export default Admin;
