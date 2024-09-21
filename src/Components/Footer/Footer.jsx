import React from 'react';
import './Footer.css'; 
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to='/'>
          Home
        </Link>

        <Link to="/AboutUs">
          About
        </Link>

        <Link to="/Services">
          Services
        </Link>

        <Link to="/ContactUs">
          Contact
        </Link>
      </div>

      {/* Contact Details */}
      <div className="footer-contact">
        <p>Address: 1234 AZ Transport St., City, Country</p>
        <p>Email: info@aztransport.com</p>
        <p>Phone: +1 (555) 123-4567</p>
      </div>

      <div className="footer-text">
        &copy; 2024 AZ UNITED INC Transport. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
