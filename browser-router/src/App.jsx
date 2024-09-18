import React, { lazy ,Suspense} from "react";
import Navbar from "./components/navbar/Navbar";
const About= lazy(()=> import("./pages/about/About"))
const Home =lazy(()=> import("./pages/home/Home"))
const Contact =lazy(()=> import("./pages/contact/Contact"))
// import Home from "./pages/home/Home";
// import About from "./pages/about/About";
import Signup from "./pages/signup/Signup";
// import Contact from "./pages/contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import PrivateRoute from "./private/PrivateRoute";
import EditUser from "./pages/edituser/EditUser";
import NotFound from "./pages/notfound/NotFound";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Toaster/>
      <main id="componentWrapper">
      <Suspense fallback={<h1>loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path ="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
          {/* here edit/: is use for making dynamic Route and after: we can give any variable name  */}
          <Route path="/edit/:id" element={<EditUser/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        </Suspense>
      </main>
       
      
      </BrowserRouter>
    </div>
  );
};

export default App;
