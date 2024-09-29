import React, { Profiler } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import { Toaster } from 'react-hot-toast'
import Home from "./Home"
import Login from './Login'
import Contact from './Contact'
import About from './About'
import Signup from './Signup'
import Profile from './Profile'
import Edit from "./Edit"

const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Toaster/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/profile" element={<Profile/>}></Route>
                <Route path="/edit/:id" element={<Edit/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App