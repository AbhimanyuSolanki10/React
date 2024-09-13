import React, { Component, useState } from "react";
import style from "./signup.module.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  let navigate = useNavigate();
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
    console.log(signupUser) // playload

    axios.post("http://localhost:5000/users",signupUser).then(()=>{
              console.log("data sent successfully")
              //clearing input fields
              setSignupUser({username:"",email:"",password:""})

            toast.success("signup successfully")

            //! this will reload the page
            // window.location.assign("/login")

            //! navigating to login Component
            navigate("/login")



    }).catch((err)=>{
        console.log(err,"something went wrong")
    })


  }

  return (
    <section id={style.signupContainer}>
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
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            value={signupUser.password}
            onChange={handleChange}


          />
        </div>
        
          <div className={style.formGroup}>
            <input type="submit" value="Signup"/>
        </div>
      </form>
    </section>
  );
};

export default Signup;
