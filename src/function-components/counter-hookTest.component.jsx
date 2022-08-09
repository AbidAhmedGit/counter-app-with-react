import React, { useState } from 'react'

export default function CounterWithHooksTest({initialCount}) {
    const [state, setState] = useState({count: initialCount})

    function handleDecrement() {
        return setState({count: state.count-1})
    }
  return (
    <>
        <div>CounterWithHooksTest</div>
        <button onClick={() => handleDecrement()}>-</button>
        <span>{state.count}</span>
        <button onClick={()=>{setState({count: state.count+1})}}>+</button>
        <div>
            <button type="submit" onClick={()=>{setState({count: 0})}}>Reset</button>
        </div>
    </>
  )
}
