import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function UserProfile() {
  const { user, isAuthenticated } = useAuth0();
  const [showWelcome, setShowWelcome] = useState(true);

  // useEffect(() => {
  //   let timer;
  //   if (isAuthenticated) {
  //     timer = setTimeout(() => {
  //       setShowWelcome(false);
  //     }, 3000); // Set the delay to 3 seconds (3000 milliseconds)
  //   }

  //   return () => {
  //     clearTimeout(timer); // Clear the timer if the component unmounts
  //   };
  // }, [isAuthenticated]);

  // if (!isAuthenticated) {
  //   return null;
  // }

  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      {/* {showWelcome && (
        <div className="welcome-message">
          <p>Welcome, {user.name}!</p>
        </div>
      )} */}
      <img
        src={user.picture}
        alt={user.name}
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          marginRight: '10px', // Add margin to separate the image from the username
        }}
      />
      <span
        style={{
          fontSize: '20px',
          marginRight: '20px'
         // Adjust the font size as needed
        }}
      >
        <h5>{user.name}</h5>
      </span>
      {/* Customize and style other user information as needed */}
    </div>
  );
}

export default UserProfile;
