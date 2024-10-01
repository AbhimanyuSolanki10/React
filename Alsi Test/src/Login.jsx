import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

const Login = () => {
    let navigate = useNavigate();
    let[loginUser,setLoginUser]=useState({
        email:"",
        password:""
    })

    let handleChange=(e)=>{
        let{name,value}=e.target;
        setLoginUser({...loginUser,[name]:value});
    }

    let[allUsers,setAllUsers]=useState(null);
    useEffect(()=>{
        async function getAllUser() {
            let{data}= await axios.get(`http://localhost:5000/users`)
            setAllUsers(data);
        }getAllUser();
    },[])

    let handleSubmit=(e)=>{
        e.preventDefault();
       let authUser= allUsers?.filter((user)=>{
            return user.email === loginUser.email && user.password === loginUser.password;
        })

        if(authUser){
            toast.success("Login Hogay Bhiyaa!!!!")
            
            navigate("/profile")
        }else{
            toast.error("Kuch to galat ho rha")
        }
        
    }

    
  return (
    <section>
    <form onSubmit={handleSubmit}>
        
        <label htmlFor="">Email</label>
        <input type="email" placeholder='enter Email' name='password' onChange={handleChange} />

        <label htmlFor="">Password</label>
        <input type="password" placeholder='enter Password' name='password'  onChange={handleChange}/>


        <input type="submit" value="Login" />
        
    </form>
</section>
  )
}

export default Login