import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "../signup/signup.module.css";
import axios from "axios";
import toast from "react-hot-toast";

const Edit = () => {
  // console.log(useParams)
  let { id } = useParams();
  let navigate = useNavigate();

  let [editUser, setEditUser] = useState(null);
  useEffect(() => {
    async function getEditUser() {
      let { data } = await axios.get(`http://localhost:5000/users/${id}`);
      setEditUser(data);
    }
    getEditUser();
  },[]);

  let handleEditUser = (e) => {
    let { name, value } = e.target;
    setEditUser({ ...editUser, [name]: value });
  };
  let handleUpdate = (e) => {
    e.preventDefault();
    console.log(editUser);
    axios
      .put(`http://localhost:5000/users/${id}`, editUser)
      .then(() => {
        toast.success("User Updated ");
        navigate("/profile");
      })
      .catch((err) => {
        toast.error("NOt Updated");
        console.log(err);
      });
  };
  return (
    <section id={style.signupContainer}>
      <form onSubmit={handleUpdate}>
        <div className={style.formGroup}>
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
            value={editUser?.username}
            onChange={handleEditUser}
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            value={editUser?.email}
            onChange={handleEditUser}
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            value={editUser?.password}
            onChange={handleEditUser}
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="dob">DOB</label>
          <input
            type="date"
            name="dob"
            id="dob"
            value={editUser?.dob}
            onChange={handleEditUser}
          />
        </div>

        <div className={style.formGroup}>
          <input type="submit" value="Update" />
        </div>
      </form>
    </section>
  );
};

export default Edit;
