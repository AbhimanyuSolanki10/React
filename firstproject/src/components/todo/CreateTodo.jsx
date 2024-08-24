import React, { useState } from 'react'
import style from './createtodo.module.css'

const CreateTodo=()=> {
  
  return (
    <div>
        <h1>Create Todo</h1>

        <form id={style.todoform}>
            <input type="text" value={todo.text} placeholder='Enter todo.....' onChange={handleChange} />
            <button>Add todo</button>
        </form>
    </div>
  )
}

export default CreateTodo
