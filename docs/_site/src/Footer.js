import React from "react";
import './Footer.css';
import { FaLinkedinIn, FaEnvelope, FaGithub } from 'react-icons/fa';
import { useBgColor } from './functions/useBgColor'

const Footer = () => {
  useBgColor('rgb(36, 46, 52)');
  return (
    
    <footer className="footer">
      <div className="footer-divider"></div>
      <div className="footer-container">
        <div className="footer-icons">
          <a
            href="https://www.linkedin.com/in/mattwilliams19"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="mailto:mattwilliams6198@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/mwilliams619"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
       
      </div>
    </footer>
  );
};

export default Footer;
