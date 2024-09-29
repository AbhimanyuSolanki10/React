import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
           <ul>
                <li><Link to={"/home"} >Home</Link></li>
                <li><Link to={"/about"} >About</Link></li>
                <li><Link to={"/contact"} >Contact</Link></li>
                <li><Link to={"/signup"} >Signup</Link></li>
                <li><Link to={"/login"} >Login</Link></li>
                <li><Link to={"/profile"} >Profile</Link></li>

           </ul>
        </nav>

    </div>
  )
}

export default Navbar