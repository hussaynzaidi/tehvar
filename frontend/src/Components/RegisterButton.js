// RegisterButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/Comp.css";

const RegisterButton = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <button className="register-now" onClick={handleRegisterClick}>
      Register now
    </button>
  );
};

export default RegisterButton;
