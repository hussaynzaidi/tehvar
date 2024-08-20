import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import './index.css';
import App from './App';
import { AuthContextProvider } from './Context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <AuthContextProvider>
      <CssBaseline />
      <App />
     </AuthContextProvider>
  </React.StrictMode>
);

