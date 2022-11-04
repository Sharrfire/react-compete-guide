import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
ReduxAdvance.propTypes = {};

function ReduxAdvance(props) {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    fetch('https://gamingshopproj-default-rtdb.firebaseio.com/cart.json', {
      method: 'PUT',
      body: JSON.stringify(cart),
    });
  }, [cart]);
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default ReduxAdvance;
