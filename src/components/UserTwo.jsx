import React, { useRef } from 'react'
import Wrapper from './Wrapper';

function UserTwo({displayName, name}) {
    const inputRef = useRef(null);
    // const name ="Ramganga";
    const updateInput=()=>{
        console.log("Hello")
        inputRef.current.value=100;
        inputRef.current.focus();
    }
  return (
    <div>
        <button onClick={()=> displayName(name)} >Display Name</button>
        <input type="text" ref={inputRef} />
        <Wrapper ref={inputRef}/>
        <button onClick={updateInput} >Update Input Field</button>
    </div>
  )
}

export default UserTwo