import React, { useState } from 'react'

function Star() {
    const[rating, setRating] = useState(0);
    const[hover, setHover] = useState(0);
    console.log('rating',rating);
    console.log('hover',hover);
    console.log('((rating&&hover))||hover',((rating&&hover)||hover));
  return (
    <div>
        <h1>Start Rating</h1>
        <div>
            {
                [1,2,3,4,5].map((num)=>(
                    <button key={num}
                    onClick={()=>setRating(num)}
                    onMouseOver={()=>setHover(num)}
                    onMouseLeave={()=>setHover(rating)}
                    >
                        <span className={`star
                            ${num<=((rating&&hover)||hover) ?'on':'off'}
                         `} 
                        >&#9733;</span>
                    </button>
                ))
            }
        </div>
        <br />
        <br />
        <button 
        style={{background:"#ccc", borderRadius:"5px"}} 
        onClick={()=>setRating(0)} 
        onMouseLeave={()=>setHover(0)}
        >Clear</button>
    </div>
  )
}

export default Star