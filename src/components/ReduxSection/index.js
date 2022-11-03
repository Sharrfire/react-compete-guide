import React from 'react';
import { Provider, useSelector } from 'react-redux';

import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import './index.css';
ReduxSection.propTypes = {};

function ReduxSection(props) {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className='container'>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </div>
  );
}

export default ReduxSection;
