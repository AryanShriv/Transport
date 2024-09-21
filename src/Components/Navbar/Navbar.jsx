import React, { useState } from 'react';
import './Navbar.css'; 

import { Link } from 'react-router-dom';

import Logo from "../../Assets/Logo/NLogo.jpg"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to = '/'>
        <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
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
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
