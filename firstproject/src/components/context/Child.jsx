import React, { useContext } from 'react'
import { GLOBALDATA } from './Context2'

const Child = () => {
    let val = useContext(GLOBALDATA);
    console.log("Child component value",val);
  return (
    <div>
        <h1>I am  Child</h1>
    </div>
  )
}

export default Child