import React from 'react'
import style from './allTodos.module.css'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const AllTodos=({list})=> {
    // console.log(e)
    // Static
    // let todos = [
    //     {id:1,text:"hello world"},
    //     {id:2,text:"Superman"},
    //     {id:3,text:"Batman"},
    //     {id:4,text:"Prashad"}
    // ];
  return (
    <main id={style.todoContainer}>
        <section>
            {
                list.map((value)=>{
                    {/* console.log(value); */}
                    let {id,text} = value;
                    return (
                        <article key={id}>
                            <span>{text}</span>
                            <div>
                                <button><FaEdit /></button>
                                <button><MdDelete /></button>
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