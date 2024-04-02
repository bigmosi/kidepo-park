import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Kidepo National Parks</p>
        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/parks">Parks</a></li>
          <li><a href="/activities">Activities</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
