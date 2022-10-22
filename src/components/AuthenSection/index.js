import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import Login from './Login/Login';
import MainHeader from './MainHeader/MainHeader';
import Home from './Home/Home';
AuthenSection.propTypes = {};

function AuthenSection(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
  };
  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');
    if (storedUserLoggedInInfo === '1') {
      setIsLoggedIn(true);
    }
  }, []);
  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default AuthenSection;
