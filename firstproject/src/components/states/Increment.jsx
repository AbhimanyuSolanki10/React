import { useState } from "react";
import React from "react";

const Increment = ()=>{
    let[count,setCount]=useState('');

     const   handleChange =(event)=>{
                // console.log(event)
                setCount(event.target.value)
        }
   

    return (
        <>
           <input id="input" type="text" placeholder="Type something" onChange={handleChange} />
           <p>Input Length : {count.length}</p>
        </>
    )
}
export default Increment