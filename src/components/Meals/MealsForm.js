
import classes from "./MealsForm.module.css"
const MealsForm=(props)=>{
  
return(
    <form className={classes.form}>
        <div className={classes.input}>
         <label>Amount</label>
         <input type="number" defaultValue ="1" min ="1" max="5" step="1"/>
        </div>
      <button>+ Add</button>
    </form>
);
}
export default MealsForm;