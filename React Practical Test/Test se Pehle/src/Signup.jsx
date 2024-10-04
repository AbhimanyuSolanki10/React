import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    let navigate=useNavigate();
    let [signupUser,setSignupUser]=useState({
        username:"",
        email:"",
        password:"",
    })

    let handleChange=(e)=>{
            let{name,value}=e.target;
            setSignupUser({...signupUser,[name]:value})
    }
    let handleSubmit=(e)=>{
        e.preventDefault();
        axios.post(`http://localhost:5000/users`,signupUser).then(()=>{
                toast.success("Signup Successfully")
                navigate("/login")
        }).catch((err)=>{
            toast.error("Error occured")
        })
    }

  return (
    <section>
            <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" placeholder='Enter name' name='username'onChange={handleChange}  />
            <label>Email</label>
            <input type="email" placeholder='Enter email' name='email' onChange={handleChange} />
            <label>Password</label>
            <input type="password" placeholder='Enter password' name='password' onChange={handleChange} />
            <input type="submit" value="Submit"  />
            </form>
    </section>
  )
}

export default Signup