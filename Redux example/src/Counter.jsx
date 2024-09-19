import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
//useSelector hook is used to access state value
import { increment,decrement,reset } from './App';

const Counter = () => {
    let count = useSelector((state)=> state.counter);
    let dispatch = useDispatch();
  return (
    <div>
        <h1>Counter {count}</h1>
        <button onClick={()=> dispatch(increment("increment function executed"))}>increment</button>
        <button onClick={()=> dispatch(decrement("decrement function executed"))}>decrement</button>
        <button onClick={()=> dispatch(reset("reset function is executed"))}>rest</button>
    </div>
    
  )
}

export default Counter