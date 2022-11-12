import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails.js";
import "./ExpenseItem.css";


function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails Title={props.title} />
      <ExpenseDetails Amount={props.amount} />
      <ExpenseDetails location={props.location} />
    </div>
  );
}

export default ExpenseItem;
