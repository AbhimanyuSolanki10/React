import React from 'react'
import style from './allTodos.module.css'

const AllTodos=()=> {
    let todos = [
        {id:1,text:"hello world"},
        {id:2,text:"Superman"},
        {id:3,text:"Batman"},
        {id:4,text:"Prashad"}
    ];
  return (
    <main id={style.todoContainer}>
        <section>
            {
                todos.map((todo)=>{
                    console.log(todo);
                    let {id,text} = todo;
                    return (
                        <article key={id}>
                            <span>{text}</span>
                            <div>
                                <button>edit</button>
                                <button>delete</button>
                            </div>
                        </article>
                        );
                })
            }
        </section>


    </main>
  )
}

export default AllTodos