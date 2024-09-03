import React, { createContext } from 'react'
import Trainers from './Trainers'
//Step1:- Creating a context
export let GLOBAL = createContext();
const Context1 = () => {
    let data =[
        {id:1 , ename: "Prashad"},
        {id:2 , ename: "Uttarsh sir"},
        {id:3 , ename: "Ansari Sir"},
    ]
  return (
    <div>
        <h1>useContext Example</h1>
        <GLOBAL.Provider value={data}>
            <Trainers/>
        </GLOBAL.Provider>
        
    </div>
  )
}

export default Context1