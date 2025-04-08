import React, { useState } from 'react'

function AddUser({setUser}) {
    
  return (
    <div>
      <h1>AddUser</h1>
      <input
        onChange={(e) => setUser(e.target.value)}
        type="text"
        placeholder="Enter user"
      />
      
      <hr />
    </div>
  );
}

export default AddUser