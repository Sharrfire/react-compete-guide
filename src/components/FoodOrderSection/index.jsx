import React from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import classes from './assets/index.module.css';
FoodOrderSection.propTypes = {};

function FoodOrderSection(props) {
  return (
    <div className={classes.container}>
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default FoodOrderSection;
