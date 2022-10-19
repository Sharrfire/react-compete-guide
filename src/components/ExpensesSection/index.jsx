import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
// import Expense from './components/Expenses/Expense';
import Expense from './Expenses/Expense';
import NewExpense from './NewExpense/NewExpense';
ExpensesSection.propTypes = {};
const DUMMY_EXPENSE = [
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
function ExpensesSection(props) {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  const handleAddExpense = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };
  return (
    <div className=''>
      <NewExpense onAddExpense={handleAddExpense} />
      <Expense items={expenses} />
    </div>
  );
}

export default ExpensesSection;
