import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    let navigate = useNavigate();
    let[signupUser,setSignupUser]=useState({
        username:"",
        email:"",
        password:"",
        dob:"",
    })
    let handleChange=(e)=>{
        let{name,value}=e.target;
        setSignupUser({...signupUser,[name]:value});
    }
    let handleSubmit=(e)=>{
        e.preventDefault();
         axios.post(`http://localhost:5000/users`,signupUser).then(()=>{
                toast.success("Signup Successfully")
                navigate("/login");
            }).catch((err)=>{
                toast.error("Something went wrong")
            })
    }

  return (
    <section>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Enter Username"  onChange={handleChange} name='username' />

                <label htmlFor="">Email</label>
                <input type="email" placeholder="Enter email"  onChange={handleChange} name='email' />

                <label htmlFor="">Password</label>
                <input type="password" placeholder="Enter Password"  onChange={handleChange} name='password' />

                <label htmlFor="">DOB</label>
                <input type="date" onChange={handleChange} name='dob'/>

                <input type="submit" value="Signup" />
            </form>
    </section>
  )
}

export default Signup