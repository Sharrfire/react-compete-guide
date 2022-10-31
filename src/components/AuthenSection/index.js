import React, { useContext } from 'react';

import Home from './Home/Home';
import Login from './Login/Login';
import MainHeader from './MainHeader/MainHeader';
import AuthContext, { AuthContextProvider } from './store/auth-context';
AuthenSection.propTypes = {};

function AuthenSection(props) {
  const contextData = useContext(AuthContext);
  return (
    <AuthContextProvider>
      <MainHeader />
      <main>
        {!contextData.isLoggedIn && <Login />}
        {contextData.isLoggedIn && <Home />}
      </main>
    </AuthContextProvider>
  );
}

export default AuthenSection;
