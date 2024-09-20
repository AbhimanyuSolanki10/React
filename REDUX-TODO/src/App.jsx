import React, { act } from "react";
import CreateTodo from "./components/CreateTodo";
import { configureStore, createSlice ,nanoid} from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import AllTodos from "./components/AllTodos";

// creating initialState
let initialState = [{ id: 1, text: "Hello world" }];

// Creating todo slice
let todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state,action) => {
      return [...state,{id:nanoid(),text:action.payload}];
    },
    removeTodo: (state,action) => {
      // console.log(action)
      return state.filter((todo)=>{
        return todo.id !== action.payload
      })
     
    },
  },
});

// exporting actions
export let {addTodo,removeTodo}=todoSlice.actions

//creating store
let mystore = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

const App = () => {
  return (
    <div>
      <Provider store={mystore}>
        <CreateTodo/>
        <AllTodos/>
      </Provider>
    </div>
  );
};

export default App;
