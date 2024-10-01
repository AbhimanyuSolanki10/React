import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    let [editUser, setEditUser] =useState(null);
    let {id}=useParams();
    let navigate =useNavigate();
 
    useEffect(() => {
      async function fetchEditUser() {
        let { data } = await axios.get(`http://localhost:5000/users/${id}`);
        console.log(data);
        setEditUser(data);
      }
      fetchEditUser();
    }, []);

    let handleChange=(e)=>{
        let{name,value}=e.target;
        setEditUser({...editUser,[name]:value});
    }
    let handleSubmit=(e)=>{
        e.preventDefault();
         axios.put(`http://localhost:5000/users/${id}`,editUser).then(()=>{
                toast.success("Updated Successfully")
                navigate("/profile");
            }).catch((err)=>{
                toast.error("Something went wrong")
            })
    }
  return (
    <section>
    <form onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input type="text" placeholder="Enter Username"  onChange={handleChange} name='username' value={editUser?.username}/>

        <label htmlFor="">Email</label>
        <input type="email" placeholder="Enter email"  onChange={handleChange} name='email' value={editUser?.email}/>

        <label htmlFor="">Password</label>
        <input type="password" placeholder="Enter Password"  onChange={handleChange} name='password' value={editUser?.password} />

        <label htmlFor="">DOB</label>
        <input type="date" onChange={handleChange} name='dob' value={editUser?.dob}/>

        <input type="submit" value="Update" />
    </form>
</section>
  )
}

export default Edit