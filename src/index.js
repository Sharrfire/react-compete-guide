import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/ReduxSection/store/store';

// import { AuthContextProvider } from './store/auth-context';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      {/* <AuthContextProvider>
      </AuthContextProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
