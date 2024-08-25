import React, { useState } from 'react'
import CreateTodo from './CreateTodo'
import AllTodos from './AllTodos'
import TodoNav from './TodoNav'

function TodoWrapper() {
  let [todo,setTodo]=useState({
    id:"",
    text:"",
    list:[{id:1,text:"Hello World"}]   // Hard coded
  })
    let handleChange=()=>{
      console.log("Changed");
    }
  return (
    <div id='todoWrapper'>
        <TodoNav/>
        <CreateTodo todo={todo} handleChange={handleChange} />
        <AllTodos list={todo.list}/>
    </div>
  )
}

export default TodoWrapper