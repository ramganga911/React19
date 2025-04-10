
import { useState } from 'react'
import CheckBoxes from './components/CheckBoxes'
import Clock from './components/Clock'
import LoopsInJSX from './components/LoopsInJSX'
import Radio from './components/Radio'
import ReuseCompo from './components/ReuseCompo'
import UseEffect from './components/UseEffect'
import Counter from './components/Counter'
import UserCart from './components/UserCart'
import Wrapper from './components/Wrapper'
import Uncontrolled from './components/Uncontrolled'
import UserTwo from './components/UserTwo'
import UserForm from './components/UserForm'
import DerivedState from './components/DerivedState'
import AddUser from './components/AddUser'
import DisplayUser from './components/DisplayUser'
import ObjectUpdate from './components/ObjectUpdate'
import { Form } from 'react-bootstrap'
import Formdata from './components/Formdata'
import College from './components/College'
import Star from './components/Star'

function App() {
  // const[count, setCount] = useState(0);
  // const [data, setData] = useState(0);
  // const [display, setDisplay] = useState(true);
  const [user, setUser] = useState("");
  const displayName=(name)=>{
    alert(name);
  }

  return (
    <>
      <h1>This is App Component</h1>
      
      {/* <CheckBoxes/> */}
      {/* <Radio/> */}
      {/* <LoopsInJSX/> */}
      {/* <ReuseCompo/> */}
      {/* <Clock/> */}
      {/* <UseEffect  /> */}
      {/* {
        display?<Counter count={count} data={data} />:null
      }
     <button onClick={()=>setCount(count+1)} >Counter</button>
     <button onClick={()=>setData(data+1)} >Data</button>
     <button onClick={()=>setDisplay(!display)}>Toggle</button> */}
      {/* <UserCart /> */}
      {/* <Wrapper><h1>Hello Ram</h1></Wrapper>
      <Uncontrolled/> */}
      {/* <UserTwo displayName={displayName} name ="Ramganga" /> */}
      {/* <UserForm/> */}
      {/* <DerivedState/> */}
      {/* <AddUser setUser={setUser} />
      // <DisplayUser user={user}/> */}
      {/* <ObjectUpdate/> */}
      {/* <Formdata /> */}
      {/* <College/> */}
      <Star/>
    </>
  )
}

export default App
