import React from 'react';
import ExpensiveItem from './ExpensiveItem';
import './css/ExpensiveList.css';
ExpensiveList.propTypes = {};

function ExpensiveList(items) {
  // if (props.items.length === 0) {
  //   return <h2 className='expenses-list__fallback'>Found no expense items</h2>;
  // }
  return (
    <>
      {items.items.length === 0 && <h2 className='expenses-list__fallback'>Found no expense items</h2>}
      <ul className='expenses-list'>
        {items.items.map((expense) => (
          <ExpensiveItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        ))}
      </ul>
    </>
  );
}

export default ExpensiveList;
