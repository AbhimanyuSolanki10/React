import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../App'

const AllTodos = () => {
    let alltodos = useSelector((state)=>state.todo)
    let dispatch =useDispatch();
  return (
    <div>
        <h3>All Todos</h3>
        {
            alltodos.map((todo)=>{
                return(
                    <section key={todo.id}>
                        <p>{todo.text} <button onClick={()=> dispatch(removeTodo(todo.id))}>Delete</button></p>
                        
                    </section>
                )
            })
        }
    </div>
  )
}

export default AllTodos