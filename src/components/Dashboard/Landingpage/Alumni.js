// Alumni.js
import React from 'react';
import './Alumni.css';

function Alumni() {
  return (
    <div className="alumni-section">
      <h1 className="section-heading">Our Alumni</h1>
      <div className="alumni-cards">
        <div className="alumni-card">
          <div className="alumni-card-content">
            <h3>Tamanna</h3>
            <p>Details about Alumni 1.</p>
          </div>
          <div className="alumni-card-image">
            <img src="./images/tamy.jpeg" alt="Alumni 5" />
          </div>
        </div>
        <div className="alumni-card">
          
          <div className="alumni-card-content">
            <h3>Harshit Jindal </h3>
            <p>Details about Alumni 2.</p>
          </div>
          <div className="alumni-card-image">
            <img src="/images/jindal.jpg" alt="Alumni 5" />
          </div>
        </div>
        <div className="alumni-card">
          
          <div className="alumni-card-content">
            <h3>Alumni 3</h3>
            <p>Details about Alumni 3.</p>
          </div>
          <div className="alumni-card-image">
            <img src="alumni5.jpg" alt="Alumni 5" />
          </div>
        </div>
        <div className="alumni-card">
          
          <div className="alumni-card-content">
            <h3>Alumni 4</h3>
            <p>Details about Alumni 4.</p>
          </div>
          <div className="alumni-card-image">
            <img src="alumni5.jpg" alt="Alumni 5" />
          </div>
        </div>
        <div className="alumni-card">
          
          <div className="alumni-card-content">
            <h3>Alumni 5</h3>
            <p>Details about Alumni 5.</p>
          </div>
          <div className="alumni-card-image">
            <img src="alumni5.jpg" alt="Alumni 5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alumni;
