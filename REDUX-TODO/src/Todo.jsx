import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {addtodofunc} from "./App";

const Todo = () => {
    let add =useSelector((state)=> state.todolist)
    let dispatch =useDispatch();
    let[todoval,setTodoVal]=useState({
        text:"",
        
    })
   
    let handleChange=(e)=>{
        // console.log(e.target.value)
       let{value,name}=e.target;
       setTodoVal({...todoval,[name]:value})
       console.log(todoval)
    }
  return (
    <div>
      <form onSubmit={()=> dispatch(addtodofunc(todoval))}>
        <input type="text" name="text" onChange={handleChange}/>
        <button>Add todo</button>
        <div>{add}</div>
      </form>
    </div>
  );
};

export default Todo;
