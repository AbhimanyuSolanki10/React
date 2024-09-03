import React from 'react'

const ChildB = (props) => {
    console.log("CHILD B COMPONENT",props.data);
  return (
    <div>
        <h1>I am  Child B</h1>
    </div>
  )
}

export default ChildB