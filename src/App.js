import { useState } from "react";
import UserForm from "./Components/Users/UserForm";
import Output from "./Components/Users/Output";


function App() {
  const[enterValue,setEnterValue]=useState([]);

  function AppData(enteredDatainUserForm)
  {
      setEnterValue((prevValue)=>{
        return [enteredDatainUserForm,...prevValue]
      });
  
    }
  return (
    <>
    <UserForm userFormToApp={AppData}/>
    <Output items={enterValue}/>
    </>
  );

}
export default App;
