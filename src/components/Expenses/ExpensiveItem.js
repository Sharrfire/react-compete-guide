import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpensiveItem.css';
function ExpensiveItem(props) {
  // const [title, setTitle] = useState(props.title);
  const handleChange = () => {
    setTitle('updated');
    console.log('Change');
  };
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={handleChange}>Change Title</button>
    </Card>
  );
}

export default ExpensiveItem;
