import React, {useRef } from 'react'

function Uncontrolled() {
    const userRef = useRef();
    const passwordRef =useRef();
    const handleSubmit=(event)=>{
        event.preventDefault();
        const user = userRef.current.value;
        const password = passwordRef.current.value;
        console.log(user,password);
    }
  return (
    <div>
        <h1>Uncontrolled Component</h1>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" id="user" ref={userRef} />
            <input type="password" ref={passwordRef} />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Uncontrolled