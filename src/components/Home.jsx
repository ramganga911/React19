import { useState } from "react";


function Home({home}){
    const callFun=()=>{
        alert("Button Click!")
    }
    const Apple=(name)=>{
        alert(name);
    }
    const Banana=(name)=>{
        alert(name);
    }
    const name = "Ramganga";
    let fruit = "Apple"
    const handleChange =()=>{
        fruit="Banana"
        console.log(fruit);
    }
    const [count, setCount] = useState(0);
    const IncrementHandle=()=>{
        setCount(count+1);
    }
    return(
        <div>
            <h1>{name}</h1>
            
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
            <button onClick={callFun} >Click me</button>
            <br />
            <button onClick={()=>Apple("Apple")} >Apple</button>
            <br />
            <button onClick={()=>Banana("Banana")} >Banana</button>
            <br />
            {fruit}
            <br />
            <button onClick={handleChange} >Change</button>

            <br />
            <br /> 
            <button onClick={IncrementHandle} >Increment</button>
            <span>Counter:{count}</span>
            <br />
            <br />
            <h2>{home}</h2>
        </div>
    )
}
export default Home;