import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');
    if (storedUserLoggedInInfo === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');

    setIsLoggedIn(false);
  };
  const handleLogIn = () => {
    localStorage.setItem('isLoggedIn', '1');

    setIsLoggedIn(true);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: handleLogout,
        onLogin: handleLogIn,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
