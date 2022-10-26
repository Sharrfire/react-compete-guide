import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MealsItemForm from './MealsItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';

MealsItem.propTypes = {};

function MealsItem(props) {
  const cartContext = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const handleAddToCart = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li key={props.id} className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}> {props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealsItemForm onAddToCart={handleAddToCart} />
      </div>
    </li>
  );
}

export default MealsItem;
