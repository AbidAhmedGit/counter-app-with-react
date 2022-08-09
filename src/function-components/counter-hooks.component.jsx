// import React from 'react'
import React, { useState } from 'react'

export default function CounterHooks({ initialCount }) {

//   const  [state, setState] = useState({count: initialCount})
const  [count, setState] = useState(initialCount);


  function handleDecrement(){
    return setState(count - 1)
  }
  return (
    <>
        <div>Counter Application - hooks</div>
        <div>
            <button onClick={() => {handleDecrement()}}>-</button>
            <span>{count}</span>
            <button onClick={() => {setState(count + 1)}}>+</button>
        </div>
        <button onClick={()=>{setState(0)}}>reset</button>
    </>
  )
}
