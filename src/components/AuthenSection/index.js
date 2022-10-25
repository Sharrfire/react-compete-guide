import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import Login from './Login/Login';
import MainHeader from './MainHeader/MainHeader';
import Home from './Home/Home';
import AuthContext from '../store/auth-context';
AuthenSection.propTypes = {};

function AuthenSection(props) {
  const contextData = useContext(AuthContext);
  return (
    <>
      <MainHeader />
      <main>
        {!contextData.isLoggedIn && <Login />}
        {contextData.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default AuthenSection;
