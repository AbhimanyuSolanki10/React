import React from 'react'
import style from './navbar.module.css'
import Home from '../../pages/home/Home'
import About from '../../pages/about/About'
import Contact from '../../pages/contact/Contact'
import Signup from '../../pages/signup/Signup'

const Navbar = () => {
  return (
    <nav id={style.navContainer}>
        <ul>
            <li><a href="/">Logo</a></li>
            <li><a href="/">home</a></li>
            <li><a href="/about">about</a></li>
            <li><a href="/contact">contact</a></li>
            <li><a href="/signup">signup</a></li>
        </ul>
        
    </nav>
  )
}

export default Navbar