import React, { useState } from "react";
import style from "./signup.module.css"
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  let navigate = useNavigate();
  const[signupUser,setSignupUser]=useState({
    username:"",
    email:"",
    password:"",
    dob:"",
  })

  let handleChange=(e)=>{
    let{name,value}=e.target;
    setSignupUser({...signupUser,[name]:value})
  }
  let handleSubmit=(e)=>{
      e.preventDefault()

      axios.post("http://localhost:5000/users",signupUser).then(()=>{
            console.log("data sent successfully")
            setSignupUser(null);
            toast.success("Signup Successfully")
            navigate("/login")
            
      }).catch((err)=>{
          console.log("Something went Wrong")
      })

  }
  return (
    <section id={style.signupContainer}>
      <form onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
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
          <label htmlFor="email">DOB</label>
          <input type="date" name="dob" id="dob"  onChange={handleChange}/>
        </div>
        <div className={style.formGroup}>
          <input type="submit" value="Signup" />
        </div>
      </form>
    </section>
  );
};

export default Signup;
