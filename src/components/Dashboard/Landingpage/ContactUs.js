import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <section className="contact-section" style={{ backgroundColor: '#041240' }}>
      <div className="container">
        <h1 className="section-heading">Get In Touch</h1>
        <div className="contact-content">
          <div className="contact-info">
            <h2>Have Any Queries?</h2>
            <p>Get a free counselling session from our experts</p>
            <ul>
              <li>
                <i className="fas fa-envelope"></i> Email: contact@example.com
              </li>
              <li>
                <i className="fas fa-phone"></i> Phone: +1234567890
              </li>
            </ul>
            <h3 class="imposter">Send us your information and<br/> We will find the imposter in your code...</h3>
          </div>
          <div className="contact-form">
            <h3>Request Callback</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="contactNumber">Contact Number:</label>
                <input type="text" id="contactNumber" name="contactNumber" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="gradYear">Graduation Year:</label>
                <input type="text" id="gradYear" name="gradYear" required />
              </div>
              <button type="submit">Request Callback</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
