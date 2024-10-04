import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    let[editUser,setEditUser]=useState(null);
    let navigate = useNavigate();
    let {id}=useParams();

    let handleEdit=(e)=>{
        let{name,value}=e.target;
        setEditUser({...editUser,[name]:value})
    }
    useEffect(()=>{
        async function getAuthUser() {
        let{data}=await axios.get(`http://localhost:5000/users/${id}`);
            setEditUser(data);
        }getAuthUser()
    },[]);
    
    let handleUpdate=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:5000/users/${id}`,editUser).then(()=>{
            toast.success("Modidyyyyy Hoagai Baabbe")
            navigate("/profile")
        }).catch((err)=>{
            toast.error("GADBAD HAI !!")
            console.log(err)
        })
    }
  return (
         <section>
        <form onSubmit={handleUpdate}>
            <label htmlFor="">Username</label>
            <input type="text" placeholder='enter Username' name='username' onChange={handleEdit} value={editUser?.username}/>

            <label htmlFor="">Email</label>
            <input type="email" placeholder='enter Email' name='password' onChange={handleEdit} value={editUser?.email} />

            <label htmlFor="">Password</label>
            <input type="password" placeholder='enter Password' name='password' onChange={handleEdit} value={editUser?.password}/>

            <label htmlFor="">DOB</label>
            <input type="date" name='dob' onChange={handleEdit} value={editUser?.dob}/>

            <input type="submit" value="Signup" />
            
        </form>
    </section>
    
  )
}

export default Edit