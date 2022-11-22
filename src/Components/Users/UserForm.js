import React , {useState} from "react";

const UserForm=(props)=>
{
    const[enteredName,setEnteredName]=useState("");
    const[enteredAge,setEnteredAge]=useState("");
      function nameHandler(event)
      {
              setEnteredName(event.target.value)
      }
      const ageHandler=(event)=>
      {
               setEnteredAge(event.target.value);
      }
       function userAdded(event)
       {
             event.preventDefault();
             if(enteredName.trim().length===0 || enteredAge.trim().length===0)
             {
                console.log("error");
                return;
             }
             if(+enteredAge<1)
             {
                console.log("age should be above 1");
                return;
             }
             const userData=
             {
                name:enteredName,
                age:enteredAge,
                id:Math.random().toString()
             }
            console.log(JSON.stringify(userData))
            props.userFormToApp(userData);
            setEnteredName("");
            setEnteredAge("");
       }


return(
    <form onSubmit={userAdded}>
        <label>Username</label><br></br>
        <input type="text" value= {enteredName} onChange={nameHandler}/><br></br>
        <label>Age (Years)</label><br></br>
        <input type="number" value= {enteredAge} onChange={ageHandler}/><br></br>
        <button type="submit">Add User</button><br></br>
    </form>
);
}
export default UserForm;