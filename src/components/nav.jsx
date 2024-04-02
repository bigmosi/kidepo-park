import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navigation">
      <button className="nav-toggle" onClick={toggleMenu}>
        <div className={isOpen ? 'open' : ''}></div>
        <div className={isOpen ? 'open' : ''}></div>
        <div className={isOpen ? 'open' : ''}></div>
      </button>
      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>Home</Link>
        </li>
        <li>
          <Link to="/parks" onClick={toggleMenu}>Parks</Link>
        </li>
        <li>
          <Link to="/activities" onClick={toggleMenu}>Activities</Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMenu}>About Us</Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
        </li>
        <li>
          <Link to="/events" onClick={toggleMenu}>Events</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
