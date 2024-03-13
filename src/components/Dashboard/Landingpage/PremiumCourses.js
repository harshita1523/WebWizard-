import React, { useEffect, useState } from 'react';
import './PremiumCourses.css';

function PremiumCourses() {
  // Set the sale end date (October 25, 2023, 12:00 PM)
  const saleEndDate = new Date('2023-11-25T12:00:00').getTime();
  
  // Calculate the time remaining
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining);

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const timeLeft = saleEndDate - now;
    
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="premium-courses">
      <div className="container">
      <h2 className="section-heading">Premium Courses Available</h2>
      <h3 className="section-heading-h3">Sale Ends in:</h3>
      <div className="timer">
              <div>
                <span>{timeRemaining.days}</span>
                <p>Days</p>
              </div>
              <div>
                <span>{timeRemaining.hours}</span>
                <p>Hours</p>
              </div>
              <div>
                <span>{timeRemaining.minutes}</span>
                <p>Minutes</p>
              </div>
              <div>
                <span>{timeRemaining.seconds}</span>
                <p>Seconds</p>
              </div>
            </div>
        <div className="premium-courses-content">
            
            
          <div className="premium-course">
            <h3>Web Development Masterclass</h3>
            <p>Unlock the full potential of web development with our masterclass course. Features include:</p>
            <ul>
              <li>Video Lectures</li>
              <li>Access to Online Classes</li>
              <li>Doubt Sessions</li>
            </ul>
            <p className="price">Price: Rs 999.99/-</p>
          </div>
          <div className="premium-course">
            <h3>Mobile App Development Pro</h3>
            <p>Become a pro in mobile app development with our comprehensive course. Features include:</p>
            <ul>
              <li>Video Lectures</li>
              <li>Hands-on Projects</li>
              <li>Live Q&A Sessions</li>
            </ul>
            <p className="price">Price: Rs 1299.99/-</p>
          </div>
          <div className="premium-course">
            <h3>Data Science Essentials</h3>
            <p>Master the world of data science with our essentials course. Features include:</p>
            <ul>
              <li>Data Analysis Techniques</li>
              <li>Machine Learning Algorithms</li>
              <li>Real-world Projects</li>
            </ul>
            <p className="price">Price: Rs 1499.99/-</p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default PremiumCourses;
