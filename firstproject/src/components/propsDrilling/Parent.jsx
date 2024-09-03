import React from 'react'
import ChildA from './ChildA'

const Parent = () => {
    let data = [10,20,30,40];

  return (
    <div>
        <h1>Props Drilling Example</h1>
        <ChildA data={data}/>
    </div>
  )
}

export default Parent