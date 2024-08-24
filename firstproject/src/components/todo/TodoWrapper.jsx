import React, { useState } from 'react'
import CreateTodo from './CreateTodo'
import AllTodos from './AllTodos'
import TodoNav from './TodoNav'

function TodoWrapper() {
  let [todo,setTodo]=useState({
    id:"",
    text:"",
    list:[]
  })
    let handleChange=()=>{
      console.log("Changed");
    }
  return (
    <div id='todoWrapper'>
        <TodoNav/>
        <CreateTodo/>
        <AllTodos/>
    </div>
  )
}

export default TodoWrapper