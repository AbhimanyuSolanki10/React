import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    let navigate =useNavigate();
    let [signupUser,setSignupUser]=useState({
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
            toast.success("Signup Hogaya Bhiya!!")
            navigate("/login")
        }).catch((err)=>{
            toast.error("Kuch to Gadbad hai!!")
            console.log(err)
        })
    }
  return (
    <section>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Username</label>
            <input type="text" placeholder='enter Username' name='username'  onChange={handleChange}/>

            <label htmlFor="">Email</label>
            <input type="email" placeholder='enter Email' name='email'  onChange={handleChange}/>

            <label htmlFor="">Password</label>
            <input type="password" placeholder='enter Password' name='password'  onChange={handleChange}/>

            <label htmlFor="">DOB</label>
            <input type="date" name='dob' onChange={handleChange} />

            <input type="submit" value="Signup" />

        </form>
    </section>
  )
}

export default Signup