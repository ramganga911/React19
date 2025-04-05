import React from 'react'

function LoopsInJSX() {
    const userName= ["Ramganga", "Rinki", "Raajnish", "Prateek"]
    const userData =[
  { name: 'Ramganga', age: 21, email: 'ramganga@example.com', id: 1 },
  { name: 'Rinki', age: 21, email: 'rinki@example.com', id: 2 },
  { name: 'Raajnish', age: 21, email: 'raajnish@example.com', id: 3 },
  { name: 'Prateek', age: 21, email: 'prateek@example.com', id: 4 }
]
  return (
    <div>
        <h1>Loop in jsx with Map Function</h1>
        <table border="2" >
            <thead><tr><td>ID</td><td>Name</td><td>Email</td><td>Age</td>
            </tr></thead>
            <tbody>
                {userData.map((user)=>(<tr key={user.id} ><td>{user.id}</td> <td>{user.name} </td> <td>{user.email}</td> <td>{user.age}</td>
            </tr>))}
            </tbody>
        </table>
        <h3>Dummy Data</h3>
        <table border="1" >
            <thead><tr><td>ID</td> <td>Name</td> <td>Email</td> <td>Age</td>
            </tr></thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Ramganga</td>
                    <td>Email</td>
                    <td>21</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default LoopsInJSX