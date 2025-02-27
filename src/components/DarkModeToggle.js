import React from 'react';
import './DarkModeToggle.css';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="dark-mode-toggle" onClick={toggleDarkMode}>
      {darkMode ? '☀️' : '🌙'}
    </div>
  );
};

export default DarkModeToggle;
