import React from 'react';
import PropTypes from 'prop-types';
import MealsItemForm from './MealsItemForm';
import classes from './MealItem.module.css';

MealsItem.propTypes = {};

function MealsItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li key={props.id} className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}> {props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealsItemForm />
      </div>
    </li>
  );
}

export default MealsItem;
