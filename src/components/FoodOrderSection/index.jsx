import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import classes from './assets/index.module.css';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
FoodOrderSection.propTypes = {};

function FoodOrderSection(props) {
  const [showCart, setShowCart] = useState(false);
  const handleShowCart = () => {
    setShowCart(true);
  };
  const handleHideCart = () => {
    setShowCart(false);
  };

  return (
    <CartProvider className={classes.container}>
      {showCart && <Cart onClose={handleHideCart} />}
      <Header onShowCart={handleShowCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default FoodOrderSection;
