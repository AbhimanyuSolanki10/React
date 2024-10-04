import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    let navigate =useNavigate();

    let[user,setUser]=useState({
      username:"",
      email:"",
      password:"",
     
    })

    let handleChange=(e)=>{
        let{name,value}=e.target;
        setUser({...user,[name]:value});
    }
   
    let handleSubmit=(e)=>{
          e.preventDefault();
          // console.log(user)

          axios.post("http://localhost:5000/users",user).then(()=>{
              console.log("Data Successfully sent")
              setUser({username:"",email:"",password:""})
              toast.success("Signup Successfully")
              navigate("/login")
          }).catch((err)=>{
              console.log("something went wrong");
          })
          
    }

  return (
    <div>
      <h1>This is Signup Page</h1>

      <section>
        <form onSubmit={handleSubmit}>
          <label name="username">username</label>
          <input type="text" name="username" value={user.username}  onChange={handleChange}/>

          <label name="email">email</label>
          <input type="email" name="email" value={user.email}  onChange={handleChange}/>

          <label name="password">Password</label>
          <input type="password" name="password"value={user.password}  onChange={handleChange} />


          <input type="submit" />
        </form>
      </section>
    </div>
  );
};

export default Signup;
