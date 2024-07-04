import React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-slate-400 p-5">
      <div className="navbar-container">
        <h1 className="navbar-title">Hi, I'm Matt</h1>
        <ul className="nav-list">
          <li><Link to="/" className="nav-item">Home</Link></li>
          <li><Link to="/about" className="nav-item">About</Link></li>
          <li><Link to="/projects" className="nav-item">Projects</Link></li>
          <li><Link to="/press" className="nav-item">Press</Link></li>
          <li><Link to="/contact" className="nav-item">Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-divider"></div>
    </nav>
  );
}

export default Navbar;