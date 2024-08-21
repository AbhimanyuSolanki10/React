import React from 'react'

const AllTodos=()=> {
    let todos = [
        {id:1,text:"hello world"},
        {id:2,text:"Superman"},
        {id:3,text:"Batman"},
        {id:4,text:"Prashad"}
    ];
  return (
    <div>
        <h1>All Todo</h1>
        <ul>
            {
                todos.map((todo)=>{
                    console.log(todo);
                    let {id,text} = todo;
                    return <li key={id}>{text}</li>
                })
            }
        </ul>


    </div>
  )
}

export default AllTodos