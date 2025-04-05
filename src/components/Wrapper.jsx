import React from 'react'

function Wrapper({children, color}) {
  return (
    <div style={{color:color}}>
        {children}
    </div>
  )
}

export default Wrapper