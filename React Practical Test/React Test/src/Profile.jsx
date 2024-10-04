import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Profile = () => {
  let [allUsers, setAllUsers] = useState(null);
  let [toggle, setToggle] = useState(false);
  useEffect(() => {
    async function fetchAllUsers() {
      let { data } = await axios.get("http://localhost:5000/users");
      setAllUsers(data);
    }
    fetchAllUsers();
  }, [toggle]);


  let handleDelete=(id)=>{
          axios.delete(`http://localhost:5000/users/${id}`).then(()=>{
              toast.success("User Deleted Successfully")
              setToggle(!toggle);

            }).catch((err)=>{
            toast.error("Something went wrong")
            console.log(err)

          })
  }

  return (
    <div>
      <h1>Welcome to My Profile</h1>
      <section>
        <table cellPadding={20} border={12}>
          
            <th>User Id</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>User Password</th>
            <th colSpan={2}>Modify</th>
        
      
            {allUsers?.map((value) => {
              return (
                <tr key={value.id}>
                  <td>{value.id}</td>
                  <td>{value.username}</td>
                  <td>{value.email}</td>
                  <td>{value.password}</td>
                  <td>
                    <button><Link to={`/edit/${value.id}`}>Edit</Link></button>
                  </td>
                  <td>
                    <button onClick={()=>{
                        handleDelete(value.id)
                    }}>Delete</button>
                  </td>
                </tr>
              );
            })}
         
        </table>
      </section>
    </div>
  );
};

export default Profile;
