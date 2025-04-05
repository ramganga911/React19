import { useState } from "react";

function Toggle(){
    const [show, setShow] = useState(true);
    const handleToggle =()=>{
        // if(show.length>0){
        //     setShow("");
        // }else{
        //     setShow("Ramganga");
        // }
        setShow(!show)
    }
    return (
        <div>
            <h1>{show?<h1>Ramganga</h1>:null}</h1>
            <button onClick={handleToggle} >Toggle</button>
        </div>
    )
}
export default Toggle;