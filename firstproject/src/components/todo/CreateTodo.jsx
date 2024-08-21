import React from 'react'
import style from './createtodo.module.css'

const CreateTodo=()=> {
  return (
    <div>
        <h1>CreatTodo</h1>
        <form id={style.todoform}>
            <input type="text" name="" id="" placeholder='Enter todo.....' />
            <button>Add todo</button>
        </form>
    </div>
  )
}

export default CreateTodo
