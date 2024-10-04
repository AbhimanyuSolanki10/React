import React, { useEffect, useState } from 'react'
import style from "../signup/signup.module.css"
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Login = () => {

  let navigate = useNavigate();

  // fetching all user from database
  let[allUsers,setAllUsers]=useState(null);

  useEffect(()=>{
    async function FetchData(){
      let {data} = await axios.get("http://localhost:5000/users")
      setAllUsers(data)
    }FetchData();
  },[])



  // Storing login user in state
  
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
    // console.log(loginUser)
    let authUser =allUsers?.find((user)=>{
      return user.email===loginUser.email && user.password===loginUser.password
    })

    if(authUser){
        toast.success(`Welcom  to ${authUser.username} Profile`)
        sessionStorage.setItem("id",authUser.id);
        navigate("/profile")
    }else{
        toast.error("Not Registered")
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
          onChange={handleChange}
        />
      </div>
      <div className={style.formGroup}>
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          onChange={handleChange}
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