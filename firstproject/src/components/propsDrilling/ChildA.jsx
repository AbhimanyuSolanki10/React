import React from 'react'
import ChildB from './ChildB'

const ChildA = (props) => {
    console.log("Child A component--------" , props.data);
  return (
    <div>
        <h1>I am Child A</h1>
        <ChildB data={props.data}/>
    </div>
  )
}

export default ChildA