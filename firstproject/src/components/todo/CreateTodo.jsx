import React, { useState } from 'react'
import style from './createtodo.module.css'

const CreateTodo=()=> {
  let [todo,setTodo]=useState({
    id:"",
    text:"",
    list:""
  })
  return (
    <div>
        <h1>Create Todo</h1>

        <form id={style.todoform}>
            <input type="text" name="" id="" placeholder='Enter todo.....' />
            <button>Add todo</button>
        </form>
    </div>
  )
}

export default CreateTodo
