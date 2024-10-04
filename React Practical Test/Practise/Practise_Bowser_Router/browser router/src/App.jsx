import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter} from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from "./pages/about/About"
import Signup from "./pages/signup/Signup"
import Contact from "./pages/contact/Contact"
import { Toaster } from 'react-hot-toast'
import Login from './pages/login/Login'
import Profile from './pages/profile/Profile'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Toaster/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App