import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react'; // Import Auth0Provider from the Auth0 React SDK
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const domain = 'dev-64uaeosaaonvndqa.au.auth0.com'; // Replace with your Auth0 domain
const clientId = 'HCGnKQUzpncL4wpDhP0WsIgDOlZUlBeQ'; // Replace with your Auth0 client ID

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin} // Set the callback URL to the current origin
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
