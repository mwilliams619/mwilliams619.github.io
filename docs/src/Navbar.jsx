import React from "react";
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-slate-400 p-5">
      <div className="navbar-container">
        <div className="nav-header">
        <h1 className="navbar-title">Hi, I'm Matt</h1>        
          <h3 className="navbar-subtitle">MS Biotechnology| Computaional Biologist</h3>
        </div> 
        <ul className="nav-list">
          <li><NavLink to="/" className="nav-item">Home</NavLink></li>
          <li><NavLink to="/about" className="nav-item">About</NavLink></li>
          <li><NavLink to="/projects" className="nav-item">Projects</NavLink></li>
          <li><NavLink to="/press" className="nav-item">Press</NavLink></li>
          <li><NavLink to="/CV" className="nav-item">CV</NavLink></li>
        </ul>
        </div>
      
      <div className="navbar-divider"></div>
    </nav>
  );
}

export default Navbar;