import React, { useEffect } from 'react'

function Counter({count, data}) {
    
    // const getCounter=()=>{
    //     console.log('Call only');
    // }
    // const handleData =()=>{
    //     console.log("handleData Called")
    // }
   
    // useEffect(()=>{
    //     getCounter();
    // },[])

    // useEffect(()=>{
    //     handleData();
    // },[data])
    //Rect Life Cycle Method
    useEffect(()=>{
        console.log("Mounting Phase only")
    },[])
    useEffect(()=>{
        console.log("Update Phase only")
    },[count,data])

    useEffect(()=>{
        return ()=>{
            console.log("Unmount Phase only");
        }
    },[])
  return (
    <div>
        <h1>Counter Value {count}</h1>
        <h1>Data Value {data} </h1>
    </div>
  )
}

export default Counter