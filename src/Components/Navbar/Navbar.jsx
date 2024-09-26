import React, { useState } from 'react';
import './Navbar.css'; 
import { Link } from 'react-router-dom';
import Logo from "../../Assets/Logo/Ref2.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src={Logo} alt="Logo" className="logo" />
          <span className="company-name">AZ UNITED INC TRANSPORT</span> 
        </Link>
      </div>

      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={handleLinkClick}>HOME</Link>
        <Link to="/AboutUs" onClick={handleLinkClick}>ABOUT</Link>
        <Link to="/Services" onClick={handleLinkClick}>SERVICES</Link>
        <Link to="/ContactUs" onClick={handleLinkClick}>CONTACT</Link>
      </div>

      <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
