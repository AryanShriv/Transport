import React from 'react';
import './Footer.css'; 
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
      <Link to = '/'>
        Home
        </Link>

        <Link to="/AboutUs">
        About
        </Link>

        <Link to="/Services">
        Services
        </Link>

        <Link to = "/ContactUs">
        Contact
        </Link>
      
      </div>
      <div className="footer-text">
        &copy; 2024 Transport. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
