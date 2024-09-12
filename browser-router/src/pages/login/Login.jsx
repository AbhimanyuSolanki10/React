import React, { useState } from 'react'
import style from "../signup/signup.module.css"

const Login = () => {
    const [loginUser,setLoginUser]=useState({
        email:"",
        password:"",
    })

    const handleLogin=(e)=>{
        let{name,value}=e.target;
        setLoginUser({...loginUser,[name]:value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(loginUser);
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