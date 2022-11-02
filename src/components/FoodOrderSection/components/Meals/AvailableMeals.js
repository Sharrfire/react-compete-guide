import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
// import DUMMY_MEALS from './dummy-meals';
import classes from './AvailableMeals.module.css';
import MealsItem from './MealsItem/MealsItem';
// const DUMMY_MEALS = [
//   {
//     id: 'm1',
//     name: 'Sushi',
//     description: 'Finest fish and veggies',
//     price: 22.99,
//   },
//   {
//     id: 'm2',
//     name: 'Schnitzel',
//     description: 'A german specialty!',
//     price: 16.5,
//   },
//   {
//     id: 'm3',
//     name: 'Barbecue Burger',
//     description: 'American, raw, meaty',
//     price: 12.99,
//   },
//   {
//     id: 'm4',
//     name: 'Green Bowl',
//     description: 'Healthy...and green...',
//     price: 18.99,
//   },
// ];
function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState();
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://gamingshopproj-default-rtdb.firebaseio.com/meals.json');
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const responseData = await response.json();
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
      console.log(response);
    };
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setIsError(error.message);
    });
  }, []);
  const mealsList = meals.map((meal) => (
    // <MealsItem key={meal.id} name={meal.name} description={meal.description} price={meal.price} />
    <MealsItem
      id={meal.id} // this is new!
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  if (isLoading) {
    return (
      <section>
        <p>Getting data</p>
      </section>
    );
  }
  if (isError) {
    return (
      <section style={{ backgroundColor: 'white', color: 'red' }}>
        <p style={{ textAlign: 'center', color: 'red' }}>Something went wrong</p>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        {' '}
        <ul>{mealsList}</ul>
        {/* {isLoading && <p>Getting data</p>} */}
        {isError}
      </Card>{' '}
    </section>
  );
}

export default AvailableMeals;
