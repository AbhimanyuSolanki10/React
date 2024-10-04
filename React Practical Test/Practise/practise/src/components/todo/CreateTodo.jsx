import React, { useState } from 'react'
import style from './createtodo.module.css'

const CreateTodo=({todo,handleChange,handleSubmit})=> {
  // console.log(todo)
  // console.log(handleChange)




  // we have to put the below code into parent component which is todo wrapper
  // let [todo,setTodo]=useState({
  //   id:"",
  //   text:"",
  //   list:[]
  // })
  //   let handleChange=()=>{
  //     console.log("Changed");
  //   } 
  
  return (
    <div>
        <h1>Create Todo</h1>

        <form id={style.todoform}>
            <input type="text"  placeholder='Enter todo.....' value={todo.text} onChange={handleChange} />
            <button onClick={handleSubmit}>Add todo</button>
        </form>
    </div>
  )
}

export default CreateTodo
