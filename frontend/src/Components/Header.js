// Header.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Comp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import img from "../assets/icon.png";
import { useAuthContext } from "../Hooks/useAuthContext";

const Header = () => {
  const { user } = useAuthContext();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };
  // const foundEmail = user ? user.foundEmail : null;

  // if (foundEmail) {
  //   console.log(foundEmail);
  // } else {
  //   console.log("User or foundEmail is not available");
  // }
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/home" className="logo">
          <img src={img} alt="Tehvar" />
        </Link>
        <h1>Tehvar</h1>
      </div>
      <div className="header-right">
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          <FontAwesomeIcon icon={faMoon} />
        </button>
        <button className="register-button">
          <Link to="/register" className="register-button">
            Register
          </Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
