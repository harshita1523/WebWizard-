import React, { useState } from 'react';
import './Navbar.css';
import { useAuth0 } from '@auth0/auth0-react';
import Login from '../Auth/Login';
import Logout from '../Auth/Logout';
import UserProfile from '../Auth/UserProfile';
import { Link } from 'react-router-dom';




function Navbar() {
  const { isAuthenticated } = useAuth0();
  // const [searchTerm, setSearchTerm] = useState(''); // Step 1: State for search term
  // const [searchResults, setSearchResults] = useState([]);
  // const [showDropdown, setShowDropdown] = useState(false);
  // const [courseClicked, setCourseClicked] = useState(null);
  
  // const courses = [ // Sample data, replace with your actual data
  //   { id: 0, title: 'html' },
  //   { id: 1, title: 'css' },
  //   { id: 2, title: 'javascript' },
  //   { id: 3, title: 'c' },
  //   { id: 4, title: 'c++' },
  //   { id: 5, title: 'csharp' },
  //   { id: 6, title: 'java' },
  //   { id: 7, title: 'python' },
  //   { id: 8, title: 'php' },
  //   { id: 9, title: 'go' },
  //   { id: 10, title: 'r' },
  //   { id: 11, title: 'django' },
  //   { id: 12, title: 'sql' },
  //   { id: 13, title: 'mongodb' },
  //   { id: 14, title: 'bootstrap' },
  //   { id: 15, title: 'jquery' },
  //   { id: 16, title: 'react' },
  //   { id: 17, title: 'nodejs' },
  //   { id: 18, title: 'angular' },
  //   { id: 19, title: 'vue' },
  //   { id: 20, title: 'typescript' },
  //   { id: 21, title: 'git' }
  // ];

  // useEffect(() => {
  //   const searchTermLower = searchTerm.toLowerCase();
  //   const filteredCourses = courses.filter((course) =>
  //     course.title.toLowerCase().includes(searchTermLower)
  //   );

  //   setSearchResults(filteredCourses);

  //   // Show the dropdown only when there are matching results
  //   setShowDropdown(!!searchTerm && filteredCourses.length > 0);
  // }, [searchTerm]);
  // // ...
  

  // const handleSearch = () => {
  //   const searchTermLower = searchTerm.toLowerCase();
  //   const filteredCourses = courses.filter((course) =>
  //     course.title.toLowerCase().includes(searchTermLower)
  //   );

  //   setSearchResults(filteredCourses);

  //   if (filteredCourses.length === 1) {
  //     const courseTitle = filteredCourses[0].title;
  //     const courseLink = `/courses#${courseTitle.toLowerCase()}`;
  //     navigate(courseLink);
  //   }
  // }
  // const handleCourseClick = (course) => {
  //   setCourseClicked(course); // Step 3: Update the courseClicked state
  //   setShowDropdown(false); // Step 4: Close the dropdown
  // };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Web Wizard🔮</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        {/* <Link to="/courses#php">PHP</Link> */}

        <a href="/">Contact Us</a>
        <a href={"https://docs.google.com/forms/d/e/1FAIpQLSdR9sKfblHPG8rR3F4p8Frs6bky5JuNGU-524JYzu_sthI2Ng/viewform?usp=sf_link"} target="_blank" rel="noopener noreferrer">
          Join Us
        </a>
      </div>
      {/* <div className="navbar-search">
       
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span id="srch-icon" onClick={handleSearch}>
          🔍
        </span>
        {showDropdown && (
          <div className="search-dropdown">
            <ul>
              {searchResults.map((course) => (
                <li key={course.id}>
                  {/* <Link to={`/courses#css`}>{course.title}</Link> */}
                  
                  {/* <Link to={`/courses#${course.title.toLowerCase()}`}>{course.title}</Link> */}
                  {/* {console.log("ClickedCoursetitle: "+courseClicked)}
                  {console.log("ClickedCoursetitle: "+course)} }
                </li>
              ))}
            </ul>
          </div>
        )}
      </div> */}
      {isAuthenticated ? (
        <>
          <div>
            <UserProfile />
          </div>
          <div>
            <Logout />
          </div>
        </>
      ) : (
        <div>
          <Login />
        </div>
      )}
      {/* Display search results */}
    </nav>
  );
}

export default Navbar;
