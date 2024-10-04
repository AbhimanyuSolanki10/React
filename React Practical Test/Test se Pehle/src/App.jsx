import React from 'react'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Profile from './Profile'
import Edit from './Edit'

const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Toaster/>
            <Routes>
                <Route path='/' element={<Signup/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/profile' element={<Profile/>} />
                <Route path='/edit/:id' element={<Edit/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App