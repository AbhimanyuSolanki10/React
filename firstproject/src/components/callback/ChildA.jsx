import React from 'react'

const ChildA = ({display}) => {
    console.log("i am Child A")
  return (
    <div></div>
  )
}

export default React.memo(ChildA)