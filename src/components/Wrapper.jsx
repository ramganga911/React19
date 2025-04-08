import React from 'react'
import { useRef } from 'react'
import styled from 'styled-components'
function Wrapper(props) {
  const Heading = styled.h1`
  color:red;
  `
  const inputRef = useRef(null);
  const inputHandler=()=>{
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.style.color="red";
  }
  return (
    <div>
        {/* <h1>{children}</h1> */}
        {/* <Heading>{children}</Heading> */}
        <input ref={inputRef} type="text" placeholder='Enter' />
        <button onClick={inputHandler}>Focus</button>
        <input type="text" ref={props.ref} />
        
    </div>
  )
}

export default Wrapper