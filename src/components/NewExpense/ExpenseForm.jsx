import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ExpenseForm.css';
ExpenseForm.propTypes = {};

function ExpenseForm(props) {
  // const [title, setTitle] = useState('');
  // const [amount, setAmount] = useState('');
  // const [date, setDate] = useState('');
  const [input, setInput] = useState({
    inputTitle: '',
    inputAmount: '',
    inputDate: '',
  });
  const handleChangeTitle = (e) => {
    // setInput({ ...input, inputTitle: e.target.value });
    setInput((prevState) => {
      return { ...prevState, inputTitle: e.target.value };
    });
  };
  const handleChangeAmount = (e) => {
    // setInput({ ...input, inputAmount: e.target.value });
    return { ...prevState, inputAmount: e.target.value };
  };
  const handleChangeDate = (e) => {
    // setInput({ ...input, inputDate: e.target.value });
    return { ...prevState, inputDate: e.target.value };
  };
  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={(e) => handleChangeTitle(e)} />{' '}
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={(e) => handleChangeAmount(e)} />{' '}
        </div>{' '}
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' onChange={(e) => handleChangeDate(e)} />{' '}
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
