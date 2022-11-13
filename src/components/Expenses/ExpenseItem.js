import React from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails.js";
import "./ExpenseItem.css";
import Card from '../UI/Card'



function ExpenseItem(props) {
 // return React.createElement('div',{},
  //React.createElement(ExpenseDate,{date:props.date},{}),
  //React.createElement(ExpenseDetails,{Title:props.title},{}),
  //React.createElement(ExpenseDetails,{Amount:props.amount},{}),
  //React.createElement(ExpenseDetails,{location:props.location},{}),
    //  );
  
  return (
    < Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails Title={props.title} />
      <ExpenseDetails Amount={props.amount} />
      <ExpenseDetails location={props.location} />
    </Card>
  );
}

export default ExpenseItem;
