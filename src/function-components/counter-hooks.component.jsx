// import React from 'react'
import React, { useState, useContext } from 'react'
import { MsgContext, ThemeContext } from '../App';

export default function CounterHooks({ initialCount }) {
// console.log('counter-hooks')
//   const  [state, setState] = useState({count: initialCount})
const  [count, setState] = useState(initialCount);
const tvalue = useContext(ThemeContext);
const mvalue = useContext(MsgContext);


  function handleDecrement(){
    return setState(count - 1)
  }
  return (
    <>
        <h1>Counter Application - hooks</h1>
        <h2>{mvalue}</h2>
        <div>
            <button style={tvalue} onClick={() => {handleDecrement()}}>-</button>
            <span>{count}</span>
            <button style={tvalue} onClick={() => {setState(count + 1)}}>+</button>
        </div>
        {/* <div style="padding-top: 2px;"></div> */}
        <div>
        <button onClick={()=>{setState(0)}}>reset</button>
        </div>
    </>
  )
}
