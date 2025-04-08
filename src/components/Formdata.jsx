import React, { useActionState } from 'react'

function Formdata() {
  const handleSubmit=async(prevdata, formData)=>{
    let name = formData.get('name');
    let password = formData.get('password');
    // console.log("Handle Submit",name, password);
    await new Promise(res=>setTimeout(res,2000));
    if(name&&password){
      return {message:"Data Submitted"}
    }else{
      return {error:"Fail"}
    }
  }
  const [data, action, pending] = useActionState(handleSubmit,undefined)
  console.log(data)
  return (
    <div>
      <h1>useActionState Hook in react js</h1>
      <form action={action}>
        <input type="text" name="name" placeholder="name" />
        <br />
        <br />
        <input type="password" name="password" placeholder="password" />
        <br />
        <br />
        <button disabled={pending}>Submit Data</button>
      </form>
      {data?.error && <span>{data?.error}</span>}
      {data?.message && <span>{data?.message}</span>}

      
    </div>
  );
}

export default Formdata