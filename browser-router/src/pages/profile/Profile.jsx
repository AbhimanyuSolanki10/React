import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./profile.module.css";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Profile = () => {
  let [authUser, setAuthUser] = useState(null);
  let [allUsers, setAllUsers] = useState(null);
  let [toggle,setToggle]=useState(false);
  let id = sessionStorage.getItem("id");
  // fetch authenticated user
  useEffect(() => {
    async function getAuthUser() {
      let { data } = await axios.get(`http://localhost:5000/users/${id}`);
      console.log(data);
      setAuthUser(data);
    }
    getAuthUser();
  }, [id]);

  // fetching all users
  useEffect(() => {
    async function getAllUsers() {
      let { data } = await axios.get("http://localhost:5000/users");
      console.log(data);
      setAllUsers(data);
    }
    getAllUsers();
  }, [toggle]);

 function handleDelete(id){
      console.log(id)
      axios.delete(`http://localhost:5000/users/${id}`).then(()=>{
        toast.success("User Deleted")
        setToggle(!toggle);

        // window.location.reload(); //force refresh
      }).catch((err)=>{
        console.log(err)
        toast.error("Unable to delete")
      })
  }

  return (
    <div>
      <h1>Welcome {authUser?.username}</h1>
      <table  id={style.usersContainer}>
        <tbody>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th colSpan={2}>Action</th>
        </tr>
          {allUsers?.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td><button><Link to={`/edit/${user.id}`}>Edit</Link></button></td>
                <td><button onClick={()=>handleDelete(user.id)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
