import {useState} from 'react';
import ChildUser from './ChildUser';
function User({user}){
    // const [message, setMessage] = useState("This is the initial Message!");
    // const [username, setUsername] = useState("");
    // const [count, setCount]  = useState(0);

    // const handleChange  =(e)=>{
    //     setUsername(e.target.value);
    //     console.log(e.target.value)
    // };
    // const handleIncrement =()=>{
    //     setCount(count+1);
    // }
    // const divStyle = {
    //     color: "blue",
        
    // };
    return(
        <div>
            {/* <h1>This is User Comp</h1>
            <h4 style={divStyle}>{message}</h4>
            <button onClick={()=>{setMessage("Change the Message!")}} >Click me to Change the Message</button>
            <form>
                <label>
                    Name:
                    <input type ="text" value={username} onChange={handleChange} />
                </label>
            </form>
            <ChildUser > 
                <span>{"Hello"} </span>
                <span>{"World"} </span>
            </ChildUser>
            <br />
            <button onClick={handleIncrement}>Increment</button>
            <span>Counter: {count}</span> */}
            <hr />
            <h3>Name: {user.name}</h3>
            
            <h3>Age: {user.age}</h3>
           
            <h3>Email: {user.email}</h3>
            
            <h3>Id: {user.id}</h3>
            <hr />
            
        </div>
    )
}
export default User;