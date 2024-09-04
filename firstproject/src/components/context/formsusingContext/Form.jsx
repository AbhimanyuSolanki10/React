import React, { useContext } from 'react'
import style from './Form.module.css';
import { GLOBALFORMDATA } from './FormContext';

const Form = () => {
    let {user:{username,email,password},handleSubmit, handleChange} = useContext(GLOBALFORMDATA);
  return (
    <div id={style.formwrapper}>
        <header>
        <h1>Form using Context</h1>
        </header>
        <form onSubmit={handleSubmit}>
        <div className={style.formGroup}>
            <label htmlFor="username">username</label>
            <input type="text" id='username' placeholder='enter username' name='username' value={username} onChange={handleChange}/>
        </div>
        <div className={style.formGroup}>
            <label htmlFor="email">email</label>
            <input type="email" id='email' placeholder='enter email' name='email' value={email} onChange={handleChange}/>
        </div>
        <div className={style.formGroup}>
            <label htmlFor="password">password</label>
            <input type="password" id='password' placeholder='enter password' name='password' value={password} onChange={handleChange}/>
        </div>
        <div className={style.formGroup}>
            <input type="submit" />
        </div>
       
        </form>
    </div>
  )
}

export default Form