


const Output=(props)=>{
    return(
        <ul>
        {props.items.map((user)=>(
        <li key={user.id}>
         {user.name} 
         ({user.age} years older)
        </li>))}
        </ul>
    )

}
export default Output;