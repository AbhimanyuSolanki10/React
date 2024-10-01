import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  let [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });
  let [allUsers, setAllUsers] = useState(null);

  useEffect(() => {
    async function fetchAllUsers() {
      let { data } = await axios.get(`http://localhost:5000/users`);
      setAllUsers(data);
    }
    fetchAllUsers();
  }, []);

  let handleLogin = (e) => {
    let { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let authUser = allUsers?.find((user) => {
      return user.email === loginUser.email && user.password === loginUser.password;
    });
    console.log(authUser)

    if (authUser) {
      toast.success("Login Successfully");
      sessionStorage.setItem("id", authUser.id);
      navigate("/profile");
    } else {
      toast.error("Not Registered");
      navigate("/");
    }
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="Enter email"
          value={loginUser.email}
          onChange={handleLogin}
          name="email"
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          value={loginUser.password}
          onChange={handleLogin}
          name="password"
        />

        <input type="submit" value="Login" />
      </form>
    </section>
  );
};

export default Login;
