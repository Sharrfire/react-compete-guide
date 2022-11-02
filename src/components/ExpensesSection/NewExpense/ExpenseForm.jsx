import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './ExpenseForm.css';
ExpenseForm.propTypes = {
  saveExpenseData: PropTypes.func,
};

function ExpenseForm(saveExpenseData) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    saveExpenseData.onSaveExpenseData(expenseData);
    setTitle('');
    setAmount('');
    setDate('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={(e) => handleChangeTitle(e)} value={title} />{' '}
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={amount} onChange={(e) => handleChangeAmount(e)} />{' '}
        </div>{' '}
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            value={date}
            // min='2019-01-01'
            // max='2022-12-31'
            onChange={(e) => handleChangeDate(e)}
          />{' '}
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
