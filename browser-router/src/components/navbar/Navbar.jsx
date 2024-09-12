import React from 'react'
import style from './navbar.module.css'
import Home from '../../pages/home/Home'
import About from '../../pages/about/About'
import Contact from '../../pages/contact/Contact'
import Signup from '../../pages/signup/Signup'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id={style.navContainer}>
        <ul>
            <li><Link to="/">Logo</Link></li>
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/contact">contact</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">signup</Link></li>
        </ul>
        
    </nav>
  )
}

export default Navbar