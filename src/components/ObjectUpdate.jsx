import React, { useState } from 'react'

function ObjectUpdate() {
    const [data, setData] = useState({
        name:"Rinki",
        Address:{
            city:"Delhi",
            State:"Bihar"
        }
    });

    const [data1, setData1] = useState([
      'Ram', 'ganga','rinki'
    ])

    const handleName=(val)=>{
        
        data.name = val;
        setData({...data})

    }
    const handleCity=(city)=>{
        data.Address.city = city;
        setData({...data,Address:{...data.Address}})
    }
    const handleUser=(val)=>{
      data1[data1.length - 1] = val;
      setData1([...data1])
    }
  return (
    <div>
      <h1>Object Update in state</h1>
      <input type="text" onChange={(e) => handleName(e.target.value)} /> <br /><br />
      <input type="text" onChange={(e) => handleCity(e.target.value)} />
      <h2>Name: {data.name}</h2>
      <h2>City: {data.Address.city}</h2>
      <h2>State: {data.Address.State} </h2>
      <button>Update Name</button><br /><br />
      <input type="text" onChange={(e)=>handleUser(e.target.value)} />
      {
        data1.map((item,index)=>(
          <h3 key={index} >{item}</h3>
        ))
      }
    </div>
  );
}

export default ObjectUpdate