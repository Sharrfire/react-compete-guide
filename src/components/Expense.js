import React from 'react';
import PropTypes from 'prop-types';
import ExpensiveItem from './ExpensiveItem';
import './Expense.css';
Expense.propTypes = {};

function Expense(props) {
  const expense = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div className='container'>
      <ExpensiveItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date}></ExpensiveItem>
      <ExpensiveItem title={expense[1].title} amount={expense[1].amount} date={expense[1].date}></ExpensiveItem>
      <ExpensiveItem title={expense[2].title} amount={expense[2].amount} date={expense[2].date}></ExpensiveItem>
      <ExpensiveItem title={expense[3].title} amount={expense[3].amount} date={expense[3].date}></ExpensiveItem>
    </div>
  );
}

export default Expense;
