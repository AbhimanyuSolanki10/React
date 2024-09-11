import React, { useState } from "react";
import style from "./signup.module.css";

const Signup = () => {
  const [signupUser,setSignupUser] =useState({
    username:"",
    email:"",
    password:"",
  })

  let handleChange = (e)=>{
    // console.log(e.target.value)
    let {name,value} = e.target
    setSignupUser({...signupUser,[name]:value})
  }
  let handleSubmit = (e)=>{
    e.preventDefault()
    console.log(signupUser)
  }

  return (
    <section id={style.signupConstianer}>
      <form onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <label htmlFor="username">usename</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
            value={signupUser.username}
            onChange={handleChange}

          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            value={signupUser.email}
            onChange={handleChange}


          />
        </div>

        <div className={style.formGroup}>
          <label htmlFor="password">password</label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Enter password"
            value={signupUser.id}
            onChange={handleChange}


          />
        </div>
        
          <div className={style.formGroup}>
            <input type="submit" />
        </div>
      </form>
    </section>
  );
};

export default Signup;
