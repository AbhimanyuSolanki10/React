//! when we have to return any element in XML we have to creat a parent element we cannot use like html tage <h1></h1> <h1></h1>
//! html are pre define tags and XML are user Define tags
//! App.jsx is a parent component in which we can call other components like <Cbc11/>
//! Cbc11 is export into App.jsx and App.jsx is exported into index.js and index.js connected with index.html
import { Fragment, useState } from "react"
// import Cbc11 from "./components/Cbc11"
// import Navbar from "./components/Navbar"
import States from "./components/states/States"
// import Counter from "./components/states/Counter"
// import Heart from "./components/states/Heart"
import Increment from "./components/states/Increment"
import CbcStates from "./components/states/CbcStates"
// import Parent from "./components/props/Parent"
import Parent from "./components/propsDrilling/Parent"
// import Parent from "./components/context/Parent"
import TodoWrapper from "./components/todo/TodoWrapper"
import React from "react";

import "./global.css"
import Controlled from "./components/controlled/Controlled"
import Controlled2 from "./components/controlled/Controlled2"
import Ref from "./components/refs/Ref"
import UncontrolledForms from "./components/uncontrolled/UncontrolledForms"
import ThemeChange from "./components/uncontrolled/ThemeChange"
import CBC from "./components/lifecycle/CBC"
import FBC from "./components/lifecycle/FBC"
import Fetch from "./components/fetch/Fetch"
import Context1 from "./components/context/Context1"
import Context2 from "./components/context/Context2"
import Form from "./components/context/formsusingContext/Form"
import FormContext from "./components/context/formsusingContext/FormContext"
import Products from "./components/customHooks/Products"


// const App = ()=>{
//     return <Fragment>
//             <h1>I am  App component</h1>
//             <h2>hewkjfbewnfnm </h2>
//         </Fragment>
// }
// Fragment or <> is used to avoid extra div which is display on inspect 
const App = ()=>{

let [toggel,setTooggle]= useState(false);

    return <>
            {/* <h1>I am  App component</h1>
            <h2>This is Second  XML Tag </h2>
            <Cbc11/>
            <Navbar/> */}
            {/* States Example */}
            {/* <States/> */}
            {/* <Counter/> */}
            {/* <Heart/> */}
            {/* <Increment/> */}
            {/* <CbcStates/> */}


            
            {/* <Parent/> */}
           {/* <TodoWrapper/> */}
                {/* <Controlled/> */}
                {/* <Controlled2/> */}




                {/* <Ref/> */}
                {/* <UncontrolledForms/> */}
                {/* <ThemeChange/> */}


                {/* <button onClick={()=>{setTooggle(!toggel)}}>toggel</button>
                {toggel ? <CBC/> : <h1>NO Component</h1>} */}

                {/* <FBC/> */}
                {/* <button onClick={()=>{setTooggle(!toggel)}}>toggel</button>
                {toggel ? <FBC/> : <h1>NO Component</h1>} */}

                {/* <Fetch/> */}
                {/* <Parent/> */}
                {/* <Context1/> */}


               {/* <Context2>
                <Parent/>
               </Context2> */}

               {/* <Form/> */}

               {/* <FormContext>
                <Form data={132}/>
               </FormContext> */}

               <Products/>
               


            </>
        
}

export default App