import React, { Fragment } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import style from "./navbar.module.css"
const Navbar = () => {
    let id= sessionStorage.getItem("id");

    let navigate = useNavigate();

    function handleLogout(){
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
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>

            {id?(
                <li>
                    <button onClick={handleLogout}>Logout</button>
                </li>
            ):(
                <Fragment>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>
                </Fragment>
            )}
        </ul>
    </nav>
  )
}

export default Navbar