import React from "react";
import style from "./allTodos.module.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-hot-toast";




const AllTodos = ({ list, setTodo }) => {
  function deleteTodo(id) {
    // console.log("todo deleted", id);
    let filterTodo = list.filter((todo) => {
    //   console.log(todo);
      return todo.id !== id;
    });

    console.log(filterTodo);
    setTodo({
      id: "",
      text: "",
      list: filterTodo,
    });

    toast.error("todo deleted");
  }

  function editTodo(id) {
    // console.log("edit todo ", id);
    let filteredTodo = list.filter((todo)=>{
        // console.log(todo)
        return todo.id != id;
    });

    let updateTodo = list.find((todo)=>{
        // console.log(todo)
        return todo.id ===id;
    });

    setTodo({
        id:updateTodo.id,
        text:updateTodo.text,
        list:filteredTodo
    });

    toast.success("edit todo");


  }

  // console.log(e)
  // Static
  // let todos = [
  //     {id:1,text:"hello world"},
  //     {id:2,text:"Superman"},
  //     {id:3,text:"Batman"},
  //     {id:4,text:"Prashad"}
  // ];
  return (
    <main id={style.todoContainer} >
      <section style={{border:"1px solid black",overflowY:"scroll",maxHeight:"40vh"}}>
        {list.map((value) => {
          {
            /* console.log(value); */
          }
          let { id, text } = value;
          return (
            <article key={id}>
              <span>{text}</span>
              <div>
                <button onClick={()=> editTodo(id)}><FaEdit /></button>
                <button onClick={() => deleteTodo(id)}><MdDelete /></button>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default AllTodos;
