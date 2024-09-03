import React, { useContext } from 'react'
import { GLOBALDATA } from './Context2'

const Child = () => {
    let val = useContext(GLOBALDATA);
    console.log(val);
  return (
    <div>
        <h1>I am  Child</h1>
    </div>
  )
}

export default Child