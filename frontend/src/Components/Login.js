import React, { useState } from 'react';
import { useLogin } from '../Hooks/useLogin';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

function Login() {
  const [email, setEmail] = useState('');
  const [staffNo, setStaffNo] = useState('');
  const { login, isLoading, error } = useLogin();
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Attempt to login
      await login(email, staffNo);
      
      // If login is successful, redirect to /admin
      navigate('/admin'); 
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Staff Number:</label>
          <input
            type="text"
            value={staffNo}
            onChange={(e) => setStaffNo(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            required
          />
        </div>
        <button type="submit" style={{ padding: '10px', width: '100%' }}>Login</button>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
}

export default Login;
