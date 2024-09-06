import React, { useReducer } from 'react'
import { initialState,reducerFunc } from './reducerFunc';
const Reducer = () => {
    

    let [state,dispatch] = useReducer(reducerFunc,initialState);
  return (
    <div>
    <h1>Counter = {state}</h1>
    <button onClick={()=>{dispatch({type:"increment"})}}>Increment</button>
    <button onClick={()=>{dispatch({type:"decrement"})}}>Decrement</button>
    <button onClick={()=>{dispatch({type:"reset"})}}>Reset</button>
    </div>
  )
}

export default Reducer