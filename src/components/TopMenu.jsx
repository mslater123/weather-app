// src/components/TopMenu.jsx
import React from 'react';
import SearchBar from './SearchBar.jsx';
import './TopMenu.css';

const TopMenu = () => {
  return (
    <nav className="top-menu">
      <div className="menu-item">Home</div>
      <div className="menu-item">Weather Map</div>
      <div className="menu-item">Forecast</div>
      <div className="menu-item">About</div>
    </nav>
  );
};

export default TopMenu;