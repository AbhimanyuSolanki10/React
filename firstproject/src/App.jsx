//! when we have to return any element in XML we have to creat a parent element we cannot use like html tage <h1></h1> <h1></h1>
//! html are pre define tags and XML are user Define tags
//! App.jsx is a parent component in which we can call other components like <Cbc11/>
//! Cbc11 is export into App.jsx and App.jsx is exported into indexedDB.js and indexedDB.js connected with index.html
import { Fragment } from "react"
import Cbc11 from "./components/Cbc11"
import Navbar from "./components/Navbar"

// const App = ()=>{
//     return <Fragment>
//             <h1>I am  App component</h1>
//             <h2>hewkjfbewnfnm </h2>
//         </Fragment>
// }
// Fragment or <> is used to avoid extra div which is display on inspect 
const App = ()=>{
    return <>
            <h1>I am  App component</h1>
            <h2>This is Second  XML Tag </h2>
            <Cbc11/>
            <Navbar/>
            <Navbar/>
            <Navbar/>
            <Navbar/>
            <Navbar/>
            <Navbar/>
            <Navbar/>
            
            </>
        
}

export default App