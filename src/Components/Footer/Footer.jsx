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
        <p>
          Email: <a href="mailto:azunitedinc@hotmail.com"> azunitedinc@hotmail.com</a>
        </p>
        <p>
        Phone: <a href="tel:905-782-0751">905-782-0751</a></p>
      </div>

      <div className="footer-text">
        &copy; 2024 AZ UNITED INC Transport. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
