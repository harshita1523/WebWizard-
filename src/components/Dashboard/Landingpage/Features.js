import React from 'react';
import './Features.css';

function Features() {
  return (
    <section className="features-section" style={{ backgroundColor: '#041240' }}>
      <div className="container">
        <h1 className="section-heading">
        If you possess the determination and dedication to master coding,
          <br />
          <span>WEB WIZARDS is here to empower you!</span>
        </h1>
        <div className="features-content">
          <div className="feature">
            <i className="fas fa-laptop-code"></i>
            <h3>Learn Coding</h3>
            <p>Master the art of coding by creating innovative and interactive web applications.</p>
          </div>
          <div className="feature">
            <i className="fas fa-tools"></i>
            <h3>Easy to Use</h3>
            <p>Our user-friendly platform makes learning and practicing web development a breeze.</p>
          </div>
          <div className="feature">
            <i className="fas fa-chalkboard-teacher"></i>
            <h3>Expert Guidance</h3>
            <p>Get guidance from experienced developers and expand your skills with confidence.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
