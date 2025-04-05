import React,{useState} from 'react'

function Radio() {
    const [gender, setGender] = useState("male");
    const [city, setCity] = useState("Noida");
  return (
    <div>
        <h1>Handle Radio and Dropdown</h1>
        <h2>Select Gender : {gender} </h2>
        <input type="radio" 
        onChange={(e)=>setGender(e.target.value)} 
        checked={gender==='male'}
        value={"male"} name="gender" id="male" /> 
        <label htmlFor="male">Male</label>
        <br />
        <input type="radio" 
        onChange={(e)=>setGender(e.target.value)}
        checked={gender==='female'}
        value={"female"} name="gender" id="female" />
        <label htmlFor="female">Female</label>
        <br />
        <h4>Select City : {city}</h4>
        <select onChange={(e)=>setCity(e.target.value)} defaultValue={"Noida"}>
            <option  value="Noida">Noida</option>
            <option  value="Gurugram">Gurugram</option>
            <option  value="Bangalore">Bangalore</option>
            <option  value="Hyderabad">Hyderabad</option>
        </select>
    </div>
  )
}

export default Radio