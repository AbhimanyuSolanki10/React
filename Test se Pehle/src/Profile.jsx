import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => 
    {
  let [allUsers, setAllUsers] = useState(null);
  let [toggle, setToggel] = useState(false);
  

  useEffect(() => {
    async function getAllUsers() {
      let { data } = await axios.get(`http://localhost:5000/users`);
      setAllUsers(data);
    }getAllUsers();
  }, [toggle]);

  let handleDelete = (id) => {
        axios.delete(`http://localhost:5000/users/${id}`).then(()=>
            {
                toast.success("Deleted successfully")
                setToggel(!toggle);
            })
        .catch((err)=>{toast.error("not delted")})
  };

  return (
    <div>
      <table border={5} cellPadding={15} cellSpacing={10}>
        <tr>
          <th>Id</th>
          <th>Username</th>
          <th>Email</th>
          <th>Password</th>
          <th colSpan={2}>Actions</th>
        </tr>
        {allUsers?.map((user)=>{
            return(
                <tr key={user?.id}>
                    <td>{user?.id}</td>
                    <td>{user?.username}</td>
                    <td>{user?.email}</td>
                    <td>{user?.password}</td>
                    <td><button><Link to={`/edit/${user.id}`}>Edit</Link></button></td>
                    <td><button onClick={()=>{
                        handleDelete(user.id)
                    }}>Delete</button></td>
                </tr>
            )
        })

        }
      </table>
    </div>
  )
  };
  


export default Profile;
