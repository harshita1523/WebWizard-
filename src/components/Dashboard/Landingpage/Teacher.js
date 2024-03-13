import React, { useState } from 'react';
import './Teacher.css'; // Don't forget to create a corresponding CSS file

function Teacher() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const openForm = () => {
    setIsFormVisible(true);
  };

  const closeForm = () => {
    setIsFormVisible(false);
  };

  return (
    <section className="teacher-section">
      <div className="teacher-content">
        <div className="teacher-image">
          {/* <img src="/images/priya.jpg" alt="Teacher" /> */}
          <img src="https://s.udemycdn.com/home/non-student-cta/instructor-2x-v3.jpg" alt="Teacher" />
        </div>
        <div className="teacher-info">
          <h1>Become an Instructor</h1>
          <p>
            Instructors from around the world teach millions of learners on Web Wizards. We provide the tools and skills to teach what you love.
          </p>
          <button onClick={openForm}>Start Teaching Now</button>
        </div>
      </div>

      {isFormVisible && (
        <div className="modal">
          <button onClick={closeForm}>Close</button>
          <iframe
            title="Google Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSdR9sKfblHPG8rR3F4p8Frs6bky5JuNGU-524JYzu_sthI2Ng/viewform?embedded=true"
            width="640"
            height="800"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      )}
    </section>
  );
}

export default Teacher;
