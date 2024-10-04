import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let [loginUser,setLoginUser]=useState({
        email:"",
        password:""
    })
    const [allUser,setAllUser]=useState(null);

    let navigate = useNavigate();
    useEffect(()=>{
        async function fetchSignupUser(){
            let {data}= await axios.get("http://localhost:5000/users")
            console.log(data)
            setAllUser(data)
        }
        fetchSignupUser();
    },[])

    let handleChange=(e)=>{
        let {name,value}=e.target;
        setLoginUser({...loginUser,[name]:value});
    }
    let handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(loginUser)

        //finding authenticated user
       let authUser= allUser?.find((user)=>{
           return user.email === loginUser.email && user.password === loginUser.password ; 
        });
        
        if(authUser){
            toast.success(`welcome ${authUser.username}`)
            sessionStorage.setItem("id",authUser.id);
            navigate("/profile")
        }else{
            toast.error("not registered")
            navigate("/signup")
        }
    }

  return (
    <div>
          <section>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder='Enter Email'onChange={handleChange} name="email" value={loginUser.email} />
            <input type="password" placeholder='Enter password' name="password" onChange={handleChange} value={loginUser.password}  />
            <input type="submit" value="Login"  />

          </form>
      </section>
    </div>
  )
}

export default Login