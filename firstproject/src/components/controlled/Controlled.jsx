import React, { useState } from 'react'


const Controlled = () => {
    let [username , setUsername]=useState("");
    let [email , setEmail]=useState("");
    let [password , setPassword]=useState("");

    let handleUsername = (e)=>{
        console.log("changeUsername");
        // console.log(e)
        setUsername(e.target.value);
    }
    let handleEmail = (e)=>{
        console.log("changeEmail");
        setEmail(e.target.value);
    }
    let handlePassword = (e)=>{
        console.log("changePassword");
        setPassword(e.target.value);
    }
    let handleSubmit =(e)=>{
        e.preventDefault();
        console.log(username,email,password)
        console.log({username,email,password})
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="" id="" placeholder='username' value={username} onChange={handleUsername} />
            <hr/>
            <input type="text" placeholder='email'  value={email} onChange={handleEmail}/>
            <hr/>
            <input type="text" placeholder='password' value={password} onChange={handlePassword} />
            <hr/>
            <input type="submit" />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Controlled