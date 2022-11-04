import { useSelector, useDispatch } from 'react-redux';

import classes from './Header.module.css';
import { authActions } from '../slice/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1 style={{ paddingLeft: '10%' }}>Redux Auth</h1>
      {isAuth && (
        <nav style={{ paddingRight: '10%' }}>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
