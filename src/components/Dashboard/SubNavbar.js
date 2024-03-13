import React, { useRef } from 'react';
import './SubNavbar.css';
import programmingTopics from '../Data/programmingData';
import { Link } from 'react-router-dom';

function SubNavbar({ setSelectedTopic }) {
  // const bootstrapRef = useRef(null);
  const handleTopicSelect = (topicId) => {
    setSelectedTopic(programmingTopics[topicId]);
  };
  // const handleMagicButtonClick = () => {
  //   // Check if the ref is available
  //   if (bootstrapRef.current) {
  //     bootstrapRef.current.click(); // Trigger a click on the Bootstrap element
  //   }
  // };

  return (
    <nav className="sub-navbar">
      {/* <button onClick={handleMagicButtonClick}>Magic</button> */}
      <ul className="sub-navbar-list">
          <li onClick={()=>handleTopicSelect('0')}><Link to="/courses#html">HTML</Link></li>
          <li onClick={()=>handleTopicSelect('1')}><Link to="/courses#css">CSS</Link></li>
          <li onClick={()=>handleTopicSelect('2')}><Link to="/courses#js">JavaScript</Link></li>
          <li onClick={()=>handleTopicSelect('3')}><Link to="/courses#c">C</Link></li>
          <li onClick={()=>handleTopicSelect('4')}><Link to="/courses#cpp">C++</Link></li>
          <li onClick={()=>handleTopicSelect('5')}><Link to="/courses#csharp">C#</Link></li>
          <li onClick={()=>handleTopicSelect('6')}><Link to="/courses#java">Java</Link></li>
          <li onClick={()=>handleTopicSelect('7')}><Link to="/courses#python">Python</Link></li>
          <li onClick={()=>handleTopicSelect('8')}><Link to="/courses#php">PHP</Link></li>
          <li onClick={()=>handleTopicSelect('9')}><Link to="/courses#go">Go</Link></li>
          <li onClick={()=>handleTopicSelect('10')}><Link to="/courses#r">R</Link></li>
          <li onClick={()=>handleTopicSelect('11')}><Link to="/courses#django">Django</Link></li>
          <li onClick={()=>handleTopicSelect('12')}><Link to="/courses#sql">SQL</Link></li>
          <li onClick={()=>handleTopicSelect('13')}><Link to="/courses#mongodb">MONGO DB</Link></li>
          {/* <li ref={bootstrapRef} onClick={()=>handleTopicSelect('14')}><Link to="/courses#bootstrap">Bootstrap</Link></li> */}
          <li onClick={()=>handleTopicSelect('14')}><Link to="/courses#bootstrap">Bootstrap</Link></li>
          <li onClick={()=>handleTopicSelect('15')}><Link to="/courses#jquery">JQuery</Link></li>
          <li onClick={()=>handleTopicSelect('16')}><Link to="/courses#react">React</Link></li>
          <li onClick={()=>handleTopicSelect('17')}><Link to="/courses#nodejs">Node JS</Link></li>
          <li onClick={()=>handleTopicSelect('18')}><Link to="/courses#angular">Angular</Link></li>
          <li onClick={()=>handleTopicSelect('19')}><Link to="/courses#vue">VUE</Link></li>
          <li onClick={()=>handleTopicSelect('20')}><Link to="/courses#typescript">Typescript</Link></li>
          <li onClick={()=>handleTopicSelect('21')}><Link to="/courses#git">GIT</Link></li>
      </ul>
    </nav>
  );
}

export default SubNavbar;
