import React from 'react';
import PropTypes from 'prop-types';
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

Meals.propTypes = {};

function Meals(props) {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
}

export default Meals;
