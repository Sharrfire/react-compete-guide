import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expense.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensiveItem from './ExpensiveItem';
Expense.propTypes = {
  // items: PropTypes.array,
};

function Expense(expenses) {
  const [filteredYear, setFilterdYear] = useState('2022');
  const handleFilterChange = (selectedYear) => {
    setFilterdYear(selectedYear);
    console.log('Expense');
  };
  return (
    <div>
      <Card className='expense'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={handleFilterChange} />
        {expenses.items.map((item) => (
          <ExpensiveItem key={item.id} title={item.title} amount={item.amount} date={item.date}></ExpensiveItem>
        ))}
      </Card>
    </div>
  );
}

export default Expense;
