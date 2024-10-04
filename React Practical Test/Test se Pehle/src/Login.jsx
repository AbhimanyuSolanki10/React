import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate=useNavigate();
    let [loginUser,setLoginUser]=useState({
        email:"",
        password:"",
    })

    let handleChange=(e)=>{
            let{name,value}=e.target;
            setLoginUser({...loginUser,[name]:value})
    }
    let handleSubmit=(e)=>{
        e.preventDefault();
        axios.get(`http://localhost:5000/users`).then(()=>{
                toast.success("login Successfully")
                sessionStorage.setItem("id",loginUser.id)

                
                navigate("/profile")


        }).catch((err)=>{
            toast.error("Error occured")
        })
    }
  return (
    <section>
    <form onSubmit={handleSubmit}>

    <label>Email</label>
    <input type="email" placeholder='Enter email' name='email' onChange={handleChange} />
    <label>Password</label>

    <input type="password" placeholder='Enter password' name='password' onChange={handleChange} />
    <input type="submit" value="Login"  />
    </form>
</section>
  )
}

export default Login