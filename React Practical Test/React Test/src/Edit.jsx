import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Edit = () => {
  let { id } = useParams();
  let navigate= useNavigate()


  let [editUser, setEditUser] = useState(null);

  useEffect(() => {
    async function fetchAuthUser() {
      let {data} = await axios.get(`http://localhost:5000/users/${id}`)
      console.log(data)
      setEditUser(data);
    }
    fetchAuthUser();
  },[]);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setEditUser({ ...editUser, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/users/${id}`,editUser).then(()=>{
            toast.success("User Profile Updated")
            navigate("/profile")
          }).catch((err)=>{
            toast.error("User Not Updated")
            console.log(err)
    })

  };
  return (
    <div>
      <section>
        <form onSubmit={handleSubmit}>
          <label name="username">username</label>
          <input
            type="text"
            name="username"
            value={editUser?.username}
            onChange={handleChange}
          />

          <label name="email">email</label>
          <input
            type="email"
            name="email"
            value={editUser?.email}
            onChange={handleChange}
          />

          <label name="password">Password</label>
          <input
            type="password"
            name="password"
            value={editUser?.password}
            onChange={handleChange}
          />

          <input type="submit" value="UPDATE" />
        </form>
      </section>
    </div>
  );
};

export default Edit;
