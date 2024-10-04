import React from 'react'
import Hoc from './Hoc'

const User = (props) => {
    console.log(props)
  return (
    <div>Users</div>
  )
}

export default Hoc(User)