import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification ';
import './index.css';
import { sendCartData, fetchCartData } from './slice/cartAction';
import { uiActions } from './slice/ui-slice';

let isInitial = true;

function ReduxAdvance() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      <Layout>
        {notification && (
          <Notification status={notification.status} title={notification.title} message={notification.message} />
        )}
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default ReduxAdvance;
