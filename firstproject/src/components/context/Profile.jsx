import React, { useContext } from 'react'
import { GLOBAL } from './Context1'

const Profile = () => {
    let val = useContext(GLOBAL);
    console.log("Profile component---->",val);
  return (
    <div>Profile</div>
  )
}

export default Profile