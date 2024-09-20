import React, { useState } from 'react'
import { addTodo } from '../App';
import { useDispatch } from 'react-redux';

const CreateTodo = () => {``
    let [todo,setTodo]=useState("");
    let dispatch =useDispatch();

    let handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(todo)
        dispatch(addTodo(todo))
        setTodo("")
    }
    
  return (
    <div>
        <form>
            <input type="text" placeholder='Enter todo' value={todo} onChange={(e)=> setTodo(e.target.value)} />
            <button onClick={handleSubmit}>Add todo</button>
        </form>
    </div>
  )
}

export default CreateTodo