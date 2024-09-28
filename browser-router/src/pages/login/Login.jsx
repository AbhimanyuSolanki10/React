import React, { useEffect, useState } from 'react'
import style from "../signup/signup.module.css"
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    // state of login user
    const [loginUser,setLoginUser]=useState({
        email:"",
        password:"",
    })
    
    const [allUsers,setAllUsers] =useState(null);

    let navigate = useNavigate();

    //fetching all users
    useEffect(()=>{
      async  function fetchSignupUser(){
        let {data} = await axios.get("http://localhost:5000/users")
        console.log(data)
        setAllUsers(data) // setting all users to state
       }
      fetchSignupUser();
    },[])

    const handleLogin=(e)=>{
        let{name,value}=e.target;
        setLoginUser({...loginUser,[name]:value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(loginUser);

        //finding authenticated user
       let authUser= allUsers?.find((user)=>{
          console.log(user)
          return user.email === loginUser.email && user.password===loginUser.password;
        });

        if(authUser){
          toast.success(`welcome ${authUser.username}`)
          //storing auth user id 
          sessionStorage.setItem("id",authUser.id);
          navigate("/profile")
        }else{
            toast.error("not registered")
            navigate("/signup")
        }
    }
  return (
    <section id={style.signupContainer}>
    <form onSubmit={handleSubmit}>
     
      <div className={style.formGroup}>
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
          value={loginUser.email}
          onChange={handleLogin}
          
        />
      </div>

      <div className={style.formGroup}>
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter password" 
          value={loginUser.password}
          onChange={handleLogin}
        />
      </div>
      
        <div className={style.formGroup}>
          <input type="submit" value="Login" />
      </div>
    </form>
  </section>
  )
}

export default Login