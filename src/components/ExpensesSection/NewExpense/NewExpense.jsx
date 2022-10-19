import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
NewExpense.propTypes = {};

function NewExpense(expense) {
  const handleSaveExpenseData = (inputExpeseData) => {
    const expenseData = {
      ...inputExpeseData,
      id: Math.random().toString(),
    };
    console.log('expenseData', expenseData);
    expense.onAddExpense(expenseData);
  };
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={handleSaveExpenseData} />
    </div>
  );
}

export default NewExpense;
