import axios, { all } from 'axios';
import React, { useEffect, useState } from 'react'
import style from "./profile.module.css"
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Profile = () => {
  let[authUser,setAuthUser]=useState(null);
  let[allUsers,setAllUsers]=useState(null);
  let[toggle,setToggle]=useState(false);
  let id=sessionStorage.getItem("id");

  // fetching authenticated user
  useEffect(()=>{
      async function getAuthUser() {
       let {data}= await axios.get(`http://localhost:5000/users/${id}`);
       setAuthUser(data);
      }
    getAuthUser();
  },[id])

  // fetching all users
  useEffect(()=>{
    async function getAllUsers(){
        let{data}=await axios(`http://localhost:5000/users`);
        setAllUsers(data);
    }getAllUsers();
  },[toggle])

  let handleDelete=(id)=>{
      axios.delete(`http://localhost:5000/users/${id}`).then(()=>{
          toast.success("User Deleted Successfully")
          setToggle(!toggle)
      }).catch((err)=>{
        console.log(err)
        toast.error("Unable to delete")
      })
  }

  return (
    <div>
      <h1>Welcome to {authUser?.username} Page</h1>
      <table id={style.usersContainer} border={4} cellPadding={2} cellSpacing={10}>
        <tbody>
          <tr>
            <th>User Id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th colSpan={2}>Actions</th>
          </tr>
          {
            allUsers?.map((user)=>{
              return(
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td><button><Link to={`/edit/${user.id}`}>Edit</Link></button></td>
                    <td><button onClick={()=>{handleDelete(user.id)}}><Link>Delete</Link></button></td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </div>
  )
}

export default Profile