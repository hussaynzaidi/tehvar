// Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/Comp.css";
import img from "../assets/icon.png";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <Link to="/home" className="logo">
        <img src={img} alt="Logo" />
      </Link>
      <div className="right-section">
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <Link to="/register" className="register-button">Register</Link>
        <button className="burger-menu" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <nav className={`burger-menu-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/about-us" onClick={toggleMenu}>About Us</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
