// src/components/Auth/Logout.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Logout() {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() => logout()}
      style={{
        background: 'red',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      Log Out
    </button>
  );
}

export default Logout;
