import React,{useRef} from 'react';
const UserChild = ({children})=>{
    const usernameRef = useRef(null);
    const handleSubmit = (event)=>{
        
        alert("The submitted username is: "+ usernameRef.current.value);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    UserName: 
                    <input type="text" ref={usernameRef} />
                </label>
                <button type="submit">Submit</button>
            </form>
            <br />
            
            <div>
                {children}
            </div>
        </div>
    )
}
export default UserChild;