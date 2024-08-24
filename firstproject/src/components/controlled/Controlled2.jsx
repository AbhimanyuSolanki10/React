import React, { useState } from 'react'

const Controlled2 = () => {
    let [registerUser,setRegisterUser]=useState({
        username:"",
        email:"",
        password:""
    })

   let {username,email,password} = registerUser;

   let registerHandle=(e)=>{
        // console.log(e)
        // console.log(e.target)
       let {name,value}=e.target;
    //    console.log(name)
    //    console.log(value)
        // Agar variable ko object ka key banana hai to --->[name]:value
        //   console.log({[name]:value})
        setRegisterUser({...registerUser,[name]:value});
        // setRegisterUser({[name]:value});
   }

   let handleSubmit = (e)=>{
            e.preventDefault();
            console.log(registerUser)

   }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            {/* name ka jo value (name='') hai vo key name ke =(sab kuch same) hona cahiye jo destructre kar rahe hai  */}
            <input type="text" placeholder='username' name='username'value={username} onChange={registerHandle}/>
            <br />
            <input type="text" placeholder='email'name='email'value={email} onChange={registerHandle}/>
            <br />
            <input type="text" placeholder='password' name='password' value={password} onChange={registerHandle}/>
            <br />
            <input type="submit"/>
        </form>
    </div>
  )
}

export default Controlled2