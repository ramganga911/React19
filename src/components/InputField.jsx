import React,{useState} from 'react'

function InputField() {
    const [value, setValue] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(0);
    const handleClick =()=>{
        setValue("");
    }
    const handleSubmit=()=>{
        alert(`Form is submited ${name}, ${age}, ${email}`)
    }
  return (
    <div>
        <input 
        onChange={(e)=>setValue(e.target.value)}
        value ={value}
        type="text"
         />
        <h1>{value}</h1>
        <button onClick ={handleClick} >Clear</button>

        <form action="" onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <br />
            <br />
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <br />
            <br />
            <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} />
            <br /><br />
            <button type="submit">Submit</button>

            <br /><br />
            
        </form>


    </div>
  )
}

export default InputField