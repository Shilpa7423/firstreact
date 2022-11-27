import classes from "./MealsItem.module.css";
import MealsForm from "./MealsForm";
const MealsItem=(props)=>
{
  return(
    <li className={classes.meal}>
      <div>
        <h3>{props.Name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div>
        <MealsForm/>
      </div>
    </li>
  );
}
export default MealsItem;