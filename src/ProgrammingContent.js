import React, { useState, useEffect } from 'react';
import './ProgrammingContent.css';

function ProgrammingContent({ selectedTopic }) {
    const [selectedListItemIndex, setSelectedListItemIndex] = useState(0);

    const handleTopicSelect = (index) => {
        setSelectedListItemIndex(0); // Reset selected list item when the topic changes
    };

    const handleListItemSelect = (index) => {
        setSelectedListItemIndex(index);
    };

    if (!selectedTopic) {
        return <div>Loading...</div>;
    }

    const selectedListItem = Array.from(selectedTopic.sidebar.keys())[selectedListItemIndex];
    

    const parseContentWithImages = (content) => {
        const parts = content.split(/@/);
        return parts.map((part, index) => {
          if (index % 2 === 0) {
            return (
              <p key={index}>
                {part
                  .split('**')
                  .map((segment, segmentIndex) => {
                    if (segmentIndex % 2 === 0) {
                      console.log('Regular Text Segment:', segment);
                    } else {
                      console.log('Image URL Segment:', segment);
                    }
      
                    return segmentIndex % 2 === 0 ? (
                      segment
                    ) : (
                    
                      <img key={segmentIndex} src={segment} alt="Example Image" />
                    );
                  })}
              </p>
            );
          } else {
            console.log('Split Marker Segment:', part);
            return null;
          }
        });
      };
      
    

  return (
    <div className="clearfix">
    <div className="main-content">
      <div className="side-bar">
        <h3>{selectedTopic.title}</h3>
        <ul>
          {Array.from(selectedTopic.sidebar.keys()).map((key, index) => (
            <li
              key={key}
              onClick={() => handleListItemSelect(index)}
              className={index === selectedListItemIndex ? 'selected' : ''}
            >
              {key}
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        <h2>{selectedListItem}</h2>
        {selectedTopic.sidebar && selectedListItem && selectedTopic.sidebar.get(selectedListItem)
          ? parseContentWithImages(selectedTopic.sidebar.get(selectedListItem))
          : null}
      </div>
    </div>
  </div>
  );
}

export default ProgrammingContent;


// import React, { useState, useEffect } from 'react';
// import './ProgrammingContent.css';



// function ProgrammingContent({ selectedTopic }) {
//     const [selectedListItemIndex, setSelectedListItemIndex] = useState(0);

//     const handleTopicSelect = (index) => {
//         setSelectedListItemIndex(0); // Reset selected list item when the topic changes
//     };

//     const handleListItemSelect = (index) => {
//         setSelectedListItemIndex(index);
//     };

//     if (!selectedTopic) {
//         return <div>Loading...</div>;
//     }

//     const selectedListItem = Array.from(selectedTopic.sidebar.keys())[selectedListItemIndex];

//     return (
//         <div className="clearfix">
//             <div className="main-content">
//                 <div className="side-bar">
//                     <h3>{selectedTopic.title}</h3>
//                     <ul>
//                         {Array.from(selectedTopic.sidebar.keys()).map((key, index) => (
//                             <li
//                                 key={key}
//                                 onClick={() => handleListItemSelect(index)}
//                                 className={index === selectedListItemIndex ? 'selected' : ''}
//                             >
//                                 {key}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div className="content">
//                     <h2>{selectedListItem}</h2>
//                     {selectedTopic.sidebar && selectedListItem && selectedTopic.sidebar.get(selectedListItem)
//                         ? selectedTopic.sidebar
//                               .get(selectedListItem)
//                               .split('@')
//                               .map((paragraph, index) => (
//                                   <p key={index}>{paragraph}</p>
//                               ))
//                         : null}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ProgrammingContent;



// // import React, { useState, useEffect } from 'react';
// // import './ProgrammingContent.css';
// // import programmingTopics from './components/Data/programmingData';
// // import SubNavbar from './components/Dashboard/SubNavbar'; // Import your SubNavbar component

// // function ProgrammingContent() {
// //     const [selectedTopicIndex, setSelectedTopicIndex] = useState(0);
// //     const [selectedListItemIndex, setSelectedListItemIndex] = useState(0);

// //     useEffect(() => {
// //         // Ensure the selected indexes are within valid bounds
// //         const maxTopicIndex = programmingTopics.length - 1;
// //         setSelectedTopicIndex(Math.min(maxTopicIndex, Math.max(0, selectedTopicIndex)));
// //         setSelectedListItemIndex(0);
// //     }, [selectedTopicIndex]);

// //     const selectedTopic = programmingTopics[selectedTopicIndex];

// //     const handleTopicSelect = (index) => {
// //         setSelectedTopicIndex(index);
// //         setSelectedListItemIndex(0); // Reset selected list item when the topic changes
// //     };

// //     const handleListItemSelect = (index) => {
// //         setSelectedListItemIndex(index);
// //     };

// //     if (!selectedTopic) {
// //         return <div>Loading...</div>;
// //     }

// //     const selectedListItem = Array.from(selectedTopic.sidebar.keys())[selectedListItemIndex];

// //     return (
// //         <div className="clearfix">
// //             <SubNavbar handleTopicSelect={handleTopicSelect} /> {/* Pass the function to SubNavbar component */}
// //             <div className="main-content">
// //                 {/* Sidebar */}
// //                 <div className="side-bar">
// //                     <h3>{selectedTopic.title}</h3>
// //                     <ul>
// //                         {Array.from(selectedTopic.sidebar.keys()).map((key, index) => (
// //                             <li
// //                                 key={key}
// //                                 onClick={() => handleListItemSelect(index)}
// //                                 className={index === selectedListItemIndex ? 'selected' : ''}
// //                             >
// //                                 {key}
// //                             </li>
// //                         ))}
// //                     </ul>
// //                 </div>
// //                 <div className="content">
// //                     <h2>{selectedListItem}</h2>
// //                     {selectedTopic.sidebar && selectedListItem && selectedTopic.sidebar.get(selectedListItem)
// //                         ? selectedTopic.sidebar
// //                               .get(selectedListItem)
// //                               .split('@')
// //                               .map((paragraph, index) => (
// //                                   <p key={index}>{paragraph}</p>
// //                               ))
// //                         : null}
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default ProgrammingContent;


// //  import React, { useState } from 'react';
// // import SubNavbar from './components/Dashboard/SubNavbar';
// // import './ProgrammingContent.css';
// // import programmingTopics from './components/Data/programmingData';

// // function ProgrammingContent() { 
// //     // Initialize selectedTopic with the first topic from programmingTopics
// //     const [selectedTopic, setSelectedTopic] = useState(programmingTopics[0]);
// //     const [selectedListItem, setSelectedListItem] = useState(
// //         Array.from(selectedTopic.sidebar.keys())[0] // Initialize with the first item
// //     );
// //     // console.log("selectedTopic: "+selectedTopic);
// //     // console.log(Array.from(selectedTopic.sidebar.keys())[0]);
// //     // console.log("selectedListItem: "+selectedListItem);


// //     // Define your programmingTopics data here as you mentioned earlier

// //     return (
// //         <div className="clearfix">
// //             <SubNavbar setSelectedTopic={setSelectedTopic} />

// //             <div className="main-content">
                

// //                 <div className="side-bar">
// //                     {console.log("seleceted topic title: "+selectedTopic.title)
// //                     }
// //                     {console.log("seleceted topic"+selectedTopic)}
// //                     <h3>{selectedTopic.title}</h3>

// //                     <ul>
// //                         {Array.from(selectedTopic.sidebar.keys()).map((key) => (
// //                             <li
// //                                 key={key}
// //                                 onClick={() => setSelectedListItem(key)}
// //                                 className={key === selectedListItem ? 'selected' : ''}
// //                             >
// //                                 {key}
// //                             </li>
// //                         ))}
// //                     </ul>
// //                 </div>
// //                 <div className="content">
// //                     <h2>{selectedListItem}</h2>

// //                     <p>{selectedTopic.sidebar.get(selectedListItem)}</p>
// //                 </div>

// //             </div>
// //         </div>
// //     );
// // }

// // export default ProgrammingContent;
