import React, { useEffect, useState } from "react";
import style from "../signup/signup.module.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const EditUser = () => {

    // console.log(useParams)
    let{id}=useParams();
    let navigate =useNavigate();
    // console.log(id);

    let [user,settuser]= useState(null);

    useEffect(()=>{
       async function getEditUser(){
            let {data} = await axios.get(`http://localhost:5000/users/${id}`)
            settuser(data);
        }
        getEditUser();
    },[]);

    let handleChange =(e)=>{
        let{name ,value} =e.target;
        settuser({...user,[name]:value});
    }
    let handleSubmit=(e)=>{
        e.preventDefault();
        console.log(user);
        axios.put(`http://localhost:5000/users/${id}`,user).then(()=>{
            toast.success("user updated");
            navigate("/profile")
        }).catch((err)=>{
            toast.error("not updated");
            console.log(err)
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
            value={user?.username}
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
            value={user?.email}
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
            value={user?.password}
            onChange={handleChange}
          />
        </div>

        <div className={style.formGroup}>
          <input type="submit" value="Update" />
        </div>
      </form>
    </section>
  );
};

export default EditUser;
