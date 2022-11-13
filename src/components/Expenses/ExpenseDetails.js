import './ExpenseDetails.css';
function ExpenseDetails(props)
{
    return(
        <div>
        <div className="expense-item__description">{props.Title}</div>
        <div className="expense-item__price">{props.Amount}</div>
        <div>{props.location}</div>
        </div>
    );
}
 export default ExpenseDetails;