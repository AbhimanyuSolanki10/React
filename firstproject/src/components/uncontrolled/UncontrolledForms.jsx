import React, { useRef } from 'react'

const UncontrolledForms = () => {
    let usernameRef = useRef();
    let emailRef = useRef();
    let passwordRef = useRef();

    function formSubmit(e){
        e.preventDefault();
        // console.log(usernameRef.current.value);
        let user = {
            username:usernameRef.current.value,
            email:emailRef.current.value,
            password:passwordRef.current.value,
        };
        console.log(user);


    }
  return (
    <div>
        <h1>Uncontrolled Forms</h1>
        <form onSubmit={formSubmit}>
            <label htmlFor="username">Username : </label>
            <input type="text " id='username' ref={usernameRef}/>
            <br/>
            <label htmlFor="email">Email : </label>
            <input type="email " id='email' ref={emailRef} />
            <br/>
            <label htmlFor="password">Password : </label>
            <input type="password" id='password' ref={passwordRef}/>
            <br/>
            <br/>
            <input type="submit" />

        </form>
    </div>
  )
}

export default UncontrolledForms