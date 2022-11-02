import React, { useState, useEffect } from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCartHandler: () => {},
});

export default CartContext;
