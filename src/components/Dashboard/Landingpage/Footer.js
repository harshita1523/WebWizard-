import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialMediaLinks = [
    { name: 'Facebook', iconClass: 'fab fa-facebook', url: '#' },
    { name: 'Twitter', iconClass: 'fab fa-twitter', url: '#' },
    { name: 'LinkedIn', iconClass: 'fab fa-linkedin', url: '#' },
    { name: 'Instagram', iconClass: 'fab fa-instagram', url: '#' },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: harshita@gmail.com</p>
          <p>Phone: 9675195887</p>
          <p>Address: Chitkara University Rajpura, Punjab</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            {socialMediaLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} className="icon-link">
                  <i className={link.iconClass}></i>
                  <span className="tooltip">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {currentYear} WEB WIZARDS. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
