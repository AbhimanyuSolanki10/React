import React from 'react'
import Child from './Child'

const Parent = () => {

    const dbData ="Hello world"

  return (
    <div>
        <h1>Parent Comp</h1>
        <hr />
        {/* <Child propname = {dbData}/> */}
        {/* <Child data = {dbData}/> */}
    </div>
  )
}

export default Parent     