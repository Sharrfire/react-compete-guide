import React, { useState } from 'react';
import Card from '../UI/Card';
import './css/Expense.css';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensiveList from './ExpensiveList';
Expense.propTypes = {
  // items: PropTypes.array,
};

function Expense(props) {
  const [filteredYear, setFilterdYear] = useState('2022');
  const handleFilterChange = (selectedYear) => {
    setFilterdYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    // console.log(expense);
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expense'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={handleFilterChange} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensiveList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expense;
