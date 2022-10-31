import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import { AuthContextProvider } from './store/auth-context';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <AuthContextProvider>
      </AuthContextProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
