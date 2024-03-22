import React from 'react';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

// Import createRoot from 'react-dom/client'
import { createRoot } from 'react-dom/client';

// Use createRoot to render your app
createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
);