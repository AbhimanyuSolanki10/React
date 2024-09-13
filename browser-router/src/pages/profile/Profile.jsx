import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Profile = () => {
    let [authUser,setAuthUser] = useState(null);
    let id = sessionStorage.getItem("id")
    // fetch authenticated user
    useEffect(()=>{
        async function getAuthUser(){
            let {data} = await axios.get(`http://localhost:5000/users/${id}`)
            console.log(data)
            setAuthUser(data)
        }
        getAuthUser();
    },[id])
  return (
    <div>
        <h1>Welcome {authUser?.username}</h1>
    </div>
  )
}

export default Profile