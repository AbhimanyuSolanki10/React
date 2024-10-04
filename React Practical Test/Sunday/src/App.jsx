import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact";
import Signup from "./pages/signup/Signup"
import Login from "./pages/login/Login"
import Profile from "./pages/profile/Profile";
import Edit from "./pages/editUser/Edit";

const App =()=>{
    return(
        <div>
            <BrowserRouter>
                <Navbar/>
                <Toaster/>
                <main id="componentWrapper">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/login"  element={<Login/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/edit/:id" element={<Edit/>}/>
                </Routes>

                </main>
            </BrowserRouter>
        </div>
    )
}
export default App;