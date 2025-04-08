import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0)

    // useEffect(()=>{
    //     Counter();
    // },[])

    function Counter(){
        console.log(count)
    }
    
  return (
    <div>
        <button onClick={()=>setCount(count+1)} >Counter {count}</button>
    </div>
  )
}

export default UseEffect