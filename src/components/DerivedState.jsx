import React, { useState } from 'react'

function DerivedState() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState('');
    const handleAddUsers=(event)=>{
        event.preventDefault();
        setUsers([...users,user])
        setUser('')
    }
    console.log(users)
    const total = users.length;
    const lastUser = users[users.length-1];
    const unique = [...new Set(users)].length;
  return (
    <div>
      <h2>Total User : {total}</h2>
      <h2>Last User : {lastUser}</h2>
      <h2>Total Unique User : {unique}</h2>

      <input
        value={user}
        onChange={(event) => setUser(event.target.value)}
        type="text"
      />
      <button onClick={handleAddUsers}>Add User</button>
      {users.map((item, index) => (
        <h4 key={index}>{item}</h4>
      ))}
    </div>
  );
}

export default DerivedState