import React, { useEffect,useState } from 'react'

function Clock() {
    const [time, setTime]  = useState(0);
    const [color, setColor] = useState("Red");
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        },1000)
    },[])
  return (
    <div>
        <h1>Digital Clock</h1>
        <h1 style={{color:color, backgroundColor:"#111", width:"120px", padding:"10px", borderRadius:"5px"}} >{time}</h1>
        <select onChange={(e)=>setColor(e.target.value)}>
            <option value="Green">Green</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Orange">Orange</option>
        </select>

    </div>
  )
}

export default Clock