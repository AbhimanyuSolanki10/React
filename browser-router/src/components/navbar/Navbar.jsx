import React, { Fragment } from "react";
import style from "./navbar.module.css";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
import Signup from "../../pages/signup/Signup";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = () => {
  let id = sessionStorage.getItem("id");
  let navigate = useNavigate();
  function handleLogout() {
    sessionStorage.clear();
    toast.success("logged out");
    navigate("/");
  }
  return (
    <nav id={style.navContainer}>
      <ul>
        <li>
          <Link to="/">Logo</Link>
        </li>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>

        {id ? (
          <li>
            <button onClick={handleLogout}>logout</button>
          </li>
        ) : (
          <Fragment>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">signup</Link>
            </li>
          </Fragment>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
