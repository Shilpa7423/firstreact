import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
const NewExpense= (props) => {

  const addExpenseOnNewExp=(enteredExpenseDatainExpenseForm)=>{

    const NewExpData= {...enteredExpenseDatainExpenseForm,
      id:Math.random().toString()
    };
    //console.log("In New expense form "+ JSON.stringify(NewExpData));
    props.fromNewExpToApp(NewExpData);

  };

    return (
      <div className='new-expense'>
        <ExpenseForm childToPareFormToNewExp={addExpenseOnNewExp}/>
      </div>
    );
  };
  
  export default NewExpense;
  