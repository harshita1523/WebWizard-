import React, { useState } from 'react';
import './Courses.css';

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(0);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const courses = [
    {
      id: 0,
      title: 'HTML Fundamentals',
      description: 'Learn the basics of HTML for web development.',
      imageUrl:'https://www.freepnglogos.com/uploads/javascript/js-circle-black-design-logo-30.png'
    },
    {
      id: 1,
      title: 'CSS Styling',
      description: 'Master CSS for web page styling and design.',
      
    },
    {
      id: 2,
      title: 'JavaScript Programming',
      description: 'Become proficient in JavaScript for dynamic web applications.',
      imageUrl:''
    },
    {
      id: 3,
      title: 'C Programming',
      description: 'Learn C programming language for system and application development.',
      imageUrl:'/images/cimg.jpg',
    },
    {
      id: 4,
      title: 'C++ Programming',
      description: 'Explore C++ for software development and game programming.',
      imageUrl:'/images/c+.jpg',
    },
    {
      id: 5,
      title: 'C# Development',
      description: 'Become skilled in C# for Windows application and game development.',
      imageUrl:'/images/c#.jpg',
    },
    {
      id: 6,
      title: 'Java Programming',
      description: 'Master Java for software development and Android apps.',
      imageUrl:'/images/java.jpg',
    },
    {
      id: 7,
      title: 'Python Fundamentals',
      description: 'Learn Python for scripting, data analysis, and web development.',
      imageUrl:'/images/python.jpg',
    },
    {
      id: 8,
      title: 'PHP Web Development',
      description: 'Become proficient in PHP for server-side web development.',
      imageUrl:'/images/php.jpg',
    },
    {
      id: 9,
      title: 'Go Programming',
      description: 'Explore the Go programming language for efficient development.',
      imageUrl:'/images/go.png',
    },
    {
      id: 10,
      title: 'R Programming',
      description: 'Master R for data analysis and statistical computing.',
      imageUrl:'/images/r.jpg',
    },
    {
      id: 11,
      title: 'Django Web Framework',
      description: 'Learn Django for rapid web application development.',
      imageUrl:'/images/django.jpg',
    },
    {
      id: 12,
      title: 'SQL Database Management',
      description: 'Become skilled in SQL for database design and management.',
      imageUrl:'/images/sql.jpg',
    },
    {
      id: 13,
      title: 'MongoDB NoSQL Database',
      description: 'Explore MongoDB for scalable and flexible data storage.',
      imageUrl:'/images/mongodb.jpg',
    },
    // {
    //   id: 14,
    //   title: 'Bootstrap Front-End Framework',
    //   description: 'Master Bootstrap for responsive web design.',
    // },
    {
      id: 15,
      title: 'jQuery JavaScript Library',
      description: 'Become proficient in jQuery for DOM manipulation and interactivity.',
      imageUrl:'/images/jquery.jpg',
    },
    {
      id: 16,
      title: 'React.js Library',
      description: 'Master React.js for building interactive user interfaces.',
      imageUrl:'/images/react.jpg',
    },
    {
      id: 17,
      title: 'Node.js JavaScript Runtime',
      description: 'Explore Node.js for server-side JavaScript development.',
      imageUrl:'/images/node.jpg',
    },
    {
      id: 18,
      title: 'Angular Framework',
      description: 'Learn Angular for building dynamic web applications.',
      imageUrl:'/images/angular.jpg'
    },
    {
      id: 19,
      title: 'Vue.js Framework',
      description: 'Become proficient in Vue.js for front-end web development.',
      imageUrl:'/images/'
    },
    {
      id: 20,
      title: 'TypeScript Language',
      description: 'Explore TypeScript for static typing and enhanced JavaScript development.',
      imageUrl:'/images/ts.jpg'
    },
    {
      id: 21,
      title: 'Git Version Control',
      description: 'Master Git for source code version management and collaboration.',
      imageUrl:'/images/git.jpg'
    },
  ];
  return (
    <section id="courses">
      <div className="container">
        <h2>Our Courses</h2>
        <div className="course-list">
          {courses.map((course) => (
            <div className="course" key={course.id}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button onClick={() => handleCourseClick(course)}>Read Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;






// function Courses() {
//   // Define your course data based on the list of services
  

//   return (
//     <section id="courses">
//       <div className="container">
//         <h2>Our Courses</h2>
//         <div className="course-list">
//           {courses.map((course) => (
//             <div className="course" key={course.id}>
//               {/* <img src={course.imageUrl}></img> */}
//               <h3>{course.title}</h3>
//               <p>{course.description}</p>
//               <button>Read Now</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Courses;
