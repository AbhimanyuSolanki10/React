import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";

const Profile = () => {
  let [allUsers, setAllUsers] = useState(null);
  let [toggle, setToggle] = useState(false);
  let id = sessionStorage.getItem("id");

  useEffect(() => {
    async function fetchAllUsers() {
      let { data } = await axios.get(`http://localhost:5000/users`);
      console.log(data);
      setAllUsers(data);
    }
    fetchAllUsers();
  }, [toggle]);

  let handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/users/${id}`)
      .then(() => {
        toast.success("Account Deleted");
        setToggle(!toggle);
      })
      .catch(() => {
        toast.error("unable to delete");
      });
  };
  return (
    <div>
      <table border={5} cellPadding={15} cellSpacing={10}>
        <tr>
          <th>Id</th>
          <th>Username</th>
          <th>Email</th>
          <th>Password</th>
          <th>Dob</th>
          <th colSpan={2}>Actions</th>
        </tr>
        {allUsers?.map((user) => {
          return (
            <tr key={user?.id}>
              <td>{user?.id}</td>
              <td>{user?.username}</td>
              <td>{user?.email}</td>
              <td>{user?.password}</td>
              <td>{user?.dob}</td>
              <td>
                <button><Link to={`/edit/${user.id}`}>Edit</Link></button>
              </td>
              <td>
                <button
                  onClick={() => {
                    handleDelete(user.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Profile;
