import React, { useState } from 'react'
import CreateTodo from './CreateTodo'
import AllTodos from './AllTodos'
import TodoNav from './TodoNav'
import { v4 as uuidv4 } from 'uuid';
import {toast} from 'react-hot-toast'
import { Toaster } from 'react-hot-toast';
function TodoWrapper() {
  let [todo,setTodo]=useState({
    id:"",
    text:"",
    list:[{id:1,text:"Hello World"}]   // Hard coded
  })
    let handleChange=(e)=>{
      // console.log("Changed");
      setTodo({...todo,text:e.target.value})
    }

    let handleSubmit =(e)=>{
        e.preventDefault();
        console.log(todo); // printing state

        //! Creating new todo object
        let newTodo = {
          id:uuidv4(),  // for generating unique id
          text:todo.text,
        };

        console.log(newTodo); 
        let updatedTodo = [...todo.list,newTodo];
        if(newTodo.text !==""){
          setTodo({
            id:"",
            text:"",
            list:updatedTodo,
          })
          toast.success("todo added");

        }else{
          console.log("empty todo");
          toast.error("empty added");

        }

    }
  return (
    <div id='todoWrapper'>
        <Toaster/>
          
        <TodoNav/>
        <CreateTodo todo={todo} handleChange={handleChange} handleSubmit={handleSubmit} />
        <AllTodos list={todo.list}/>
        
    </div>
  )
}

export default TodoWrapper