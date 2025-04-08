import React from 'react'

function UserForm() {

    const handleSubmit= async()=>{
        
        await new Promise(res=> setTimeout(res,2000))
        console.log("Submit")
    }
  return (
    <div>
        <h1>useFormStatus Hook in React js 19</h1>
        <form action={handleSubmit}>
            <input type="text" placeholder='Enter Name' />
            <br />
            <input type="password" placeholder='Password' />
            <br />
            <button>Submit</button>

        </form>
    </div>
  )
}

export default UserForm