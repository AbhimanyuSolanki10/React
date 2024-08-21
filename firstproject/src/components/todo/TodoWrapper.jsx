import React from 'react'
import CreateTodo from './CreateTodo'
import AllTodos from './AllTodos'
import TodoNav from './TodoNav'

function TodoWrapper() {
  return (
    <div id='todoWrapper'>
        <TodoNav/>
        <CreateTodo/>
        <AllTodos/>
    </div>
  )
}

export default TodoWrapper