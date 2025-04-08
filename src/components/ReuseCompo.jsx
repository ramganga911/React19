import React from 'react'
import User from './User'
function ReuseCompo() {
    const userData =[
  { name: 'Ramganga', age: 21, email: 'ramganga@example.com', id: 1 },
  { name: 'Rinki', age: 21, email: 'rinki@example.com', id: 2 },
  { name: 'Raajnish', age: 21, email: 'raajnish@example.com', id: 3 },
  { name: 'Prateek', age: 21, email: 'prateek@example.com', id: 4 }
]

  return (
    <div>
        <h1>Reuse Component in Loop</h1>
        {
          userData.map((user)=>(
            <div key={user.id}> 
              <User user={user}/>
            </div>
          ))
        }
    </div>
  )
}

export default ReuseCompo