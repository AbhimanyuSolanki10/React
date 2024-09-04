import React, { createContext, useState } from 'react'
import Form from "./Form"

export const GLOBALFORMDATA= createContext();
const FormContext = (props) => {
    // console.log(props);
    
    let [user,setUser]=useState({
        username:"",
        email:"",
        password:""
    });

    function handleChange(e){
        let {name ,value} = e.target;
        setUser({...user,[name]:value});
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(user);
    }
  return (
    <GLOBALFORMDATA.Provider value={{user,handleChange,handleSubmit}}>
        {props.children}
    </GLOBALFORMDATA.Provider>
  )
}

export default FormContext