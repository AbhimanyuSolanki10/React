import React, { useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    let navigate =useNavigate();
  let[user,setUser]=useState({
    username:"",
    email:"",
    password:""
  })

  let handleChange=(e)=>{
        let {name,value}=e.target;
        setUser({...user,[name]:value})
  }

  let handleSubmit = (e)=>{
      e.preventDefault()
      console.log(user)

      axios.post("http://localhost:5000/users",user).then(()=>{
            console.log("Data sent successfully")
            setUser({username:"",email:"",password:""})
            toast.success("Signup Successfully")
            navigate("/login")


      }).catch((err)=>{
        console.log(err,"Something went wrong")
      })
  }

  return (
    <div>
      <section>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter username' name="username" onChange={handleChange} value={user.username} />
            <input type="email" placeholder='Enter Email'onChange={handleChange} name="email" value={user.email} />
            <input type="password" placeholder='Enter password' name="password" onChange={handleChange} value={user.password} />
            <input type="submit" value="Signup"  />

          </form>
      </section>
    </div>
  )
}

export default Signup