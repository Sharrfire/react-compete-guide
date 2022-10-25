import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';

import Home from './Home/Home';
import Login from './Login/Login';
import MainHeader from './MainHeader/MainHeader';
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
