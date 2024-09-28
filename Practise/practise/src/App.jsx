//! when we have to return any element in XML we have to creat a parent element we cannot use like html tage <h1></h1> <h1></h1>
//! html are pre define tags and XML are user Define tags
//! App.jsx is a parent component in which we can call other components like <Cbc11/>
//! Cbc11 is export into App.jsx and App.jsx is exported into index.js and index.js connected with index.html
import { Fragment, useState } from "react"
import TodoWrapper from "./components/todo/TodoWrapper"
import React from "react";
import "./global.css"

const App = ()=>{

let [toggel,setTooggle]= useState(false);

    return <>
           <TodoWrapper/>
            </>
        
}

export default App