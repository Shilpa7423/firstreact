import React from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails.js";
import "./ExpenseItem.css";
import Card from '../UI/Card'



 // return React.createElement('div',{},
  //React.createElement(ExpenseDate,{date:props.date},{}),
  //React.createElement(ExpenseDetails,{Title:props.title},{}),
  //React.createElement(ExpenseDetails,{Amount:props.amount},{}),
  //React.createElement(ExpenseDetails,{location:props.location},{}),
    //  );
    //const [initialExpense, setExpense]=useState(props.amount);
   

    //function changeExpense()
    //{
      //  setExpense("$100");
        //console.log(initialExpense);
    //}
     //<button onClick={changeExpense}>Change Expense to $100</button>
  
function ExpenseItem(props) {
    
  return (
    < Card className="expense-item">
      <ExpenseDetails Title={props.title} />
      <ExpenseDetails Amount={props.amount} />
      <ExpenseDate date={props.date} />
      <ExpenseDetails location={props.location} />
    </Card>
  );
}

export default ExpenseItem;
