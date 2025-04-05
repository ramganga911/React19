import React, { useState } from 'react'

function CheckBoxes() {
    const [skills, setSkills] = useState([]);
    const handleSkills =(e)=>{
        console.log(e.target.value, e.target.checked);
        if(e.target.checked){
            setSkills([...skills, e.target.value]);
        }else{
            setSkills([...skills.filter((item)=>item!=e.target.value)])
        }
    }
  return (
    <div>
        <form action="">
            <h3>Select Checkbox in React js</h3>
            <input onChange={handleSkills} type="checkbox" id="Ram" value="Ramganga" />
            <label htmlFor="Ram">Ramganga</label>
            <br />
            <input onChange={handleSkills} type="checkbox" id="Rama" value="Rama" />
            <label htmlFor="Rama">Ram</label>
            <br />
            <input onChange={handleSkills} type="checkbox" id="Ramg" value="Ramg" />
            <label htmlFor="Ramg">Ramg</label>
            <br />
            <input onChange={handleSkills} type="checkbox" id="Ramga" value="Ramga" />
            <label htmlFor="Ramga">Ramga</label>
        </form>
        <br /><br />
        <br />
        {skills.toString()}
    </div>
  )
}

export default CheckBoxes