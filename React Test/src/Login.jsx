import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const [allUsers, setAllUsers] = useState(null);

  let navigate = useNavigate();

  let id = sessionStorage.getItem("id");

  useEffect(() => {
    async function fetchSignupUser() {
      let {data} = await axios.get("http://localhost:5000/users");
      console.log(data)
      setAllUsers(data);
    }
    fetchSignupUser();
  },[]);

  let handleLogin = (e) => {
    let { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    let authUser = allUsers?.find((user) => {
      return (
        user.email === loginUser.email && user.password === loginUser.password
      );
    });
    console.log(authUser)

    if (authUser) {
      toast.success(`Welcome to ${authUser.username}`);
      sessionStorage.getItem("id", authUser.id);
      navigate("/profile");
    } else {
      toast.error("Not Registered");
      navigate("/signup");
    }
  };

  return (
    <div>
      <div>
        <h1>This is Login Page</h1>
      </div>

      <section>
        <form onSubmit={handleSubmit}>
          <label name="email">email</label>
          <input
            type="email"
            name="email"
            value={loginUser.email}
            onChange={handleLogin}
          />

          <label name="password">Password</label>
          <input
            type="password"
            name="password"
            value={loginUser.password}
            onChange={handleLogin}
          />

          <input type="submit" name="Login" />
        </form>
      </section>
    </div>
  );
};

export default Login;
