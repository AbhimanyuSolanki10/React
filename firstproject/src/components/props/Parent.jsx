import React from 'react'
import {Child} from './Child'
import Child2 from './Child2'
import Child3 from './Child3'
import JSONDATA from './db.json'
const Parent = () => {

    const dbData ="Hello"
    const person ={
      username:"Prashad",
      id:1,
      designation:"trainer",
      subject:"frontend"
    };

  return (
    <div>
        <h1>Parent Comp</h1>
        <hr />
        {/* <Child propname = {dbData}/> */}
        {/* sending single prop */}
        {/* <Child22 data = {{dbData,person}}/> */}
        {/* sending multiple prop */}
        {/* <Child2 dbData={dbData} person={person}/> */}
        {/* sending array of object as props */}
        <Child3 JSONDATA={JSONDATA}/>
        
    </div>
  )
}

export default Parent     