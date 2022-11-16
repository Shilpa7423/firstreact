import React, {useState} from 'react';
import ExpensesList from './ExpenseList';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';


  const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
  
   const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };
    const filteredExpenses=props.items.filter(exp=>{
      return exp.date.getFullYear().toString()===filteredYear;
  });

  return (

    <Card className="expenses">
      <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
       <ExpensesList items={filteredExpenses} />
        </Card>
  );
}
export default Expenses;