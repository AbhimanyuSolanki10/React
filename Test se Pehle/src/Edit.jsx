import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    let navigate= useNavigate();
    let{id}=useParams();
    let [authUser,setAuthUser]=useState(null);


    let handleChange=(e)=>{
            let{name,value}=e.target;
            setAuthUser({...authUser,[name]:value})
    }
    
  useEffect(()=>{
    async function getDAta(){
        let {data} = await axios.get(`http://localhost:5000/users/${id}`)
        setAuthUser(data);  
    }getDAta();
  },[])


    let handleSubmit=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:5000/users/${id}`,authUser).then(()=>{
            toast.success("Updated Successfully")
            navigate("/profile")
        }).catch(()=>{
            toast.error("cheep dapak dam dam!!!!")
        })

       
    }
  return (
    <section>
    <form onSubmit={handleSubmit}>
    <label>Username</label>
    <input type="text" placeholder='Enter name' name='username' onChange={handleChange} value={authUser?.username} />
    <label>Email</label>
    <input type="email" placeholder='Enter email' name='email' onChange={handleChange} value={authUser?.email}/>
    <label>Password</label>
    <input type="password" placeholder='Enter password' name='password' onChange={handleChange} value={authUser?.password}/>
    <input type="submit" value="Submit"  />
    </form>
</section>
  )
}

export default Edit