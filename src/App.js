import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from './components/Dashboard/Navbar';
import ProgrammingContent from './ProgrammingContent';
import Mainpage from './components/Dashboard/Landingpage/Mainpage';
import SubNavbar from './components/Dashboard/SubNavbar';
import programmingTopics from './components/Data/programmingData';

function App() {
  const { isAuthenticated } = useAuth0();
  const [selectedTopic, setSelectedTopic] = useState(programmingTopics[0]);
  const [showProgrammingContent, setShowProgrammingContent] = useState(false);

  const handleCoursesClick = () => {
    setShowProgrammingContent(true);
  };

  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
          <SubNavbar setSelectedTopic={setSelectedTopic} onCoursesClick={handleCoursesClick} />
        </header>
        <main>
          {/* <ProgrammingContent selectedTopic={selectedTopic}/> */}

          <Routes>
          <Route path="/courses" element={<ProgrammingContent selectedTopic={selectedTopic} />} />
          {/* <Route path={`/courses#${selectedTopic.title.toLowerCase()}`} element={<ProgrammingContent selectedTopic={selectedTopic}/>} /> */}
          <Route path="/" element={<Mainpage />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;





// import React, { useState } from 'react';
// import './App.css';
// import Navbar from './components/Dashboard/Navbar';
// import SubNavbar from './components/Dashboard/SubNavbar';
// import Mainpage from './components/Dashboard/Landingpage/Mainpage';
// import programmingTopics from './components/Data/programmingData';
// import ProgrammingContent from './components/Dashboard/ProgrammingContent'; // Import ProgrammingContent

// function App() {
//   // const { isAuthenticated } = useAuth0();
//   const [selectedTopic, setSelectedTopic] = useState(programmingTopics[0]);
//   const [showProgrammingContent, setShowProgrammingContent] = useState(false);

//   const handleCoursesClick = () => {
//     setShowProgrammingContent(true);
//   };

//   return (
//     <div className="App">
//       <header>
//         <nav>
//           <Navbar />
//           <SubNavbar setSelectedTopic={setSelectedTopic} onCoursesClick={handleCoursesClick} />
          
//         </nav>
//       </header>
//       <main>
//         {showProgrammingContent ? ( 
//           <ProgrammingContent selectedTopic={selectedTopic} />
//         ) : (
//           <Mainpage />
//         )}
//       </main>
//     </div>
//   );
// }

// export default App;
