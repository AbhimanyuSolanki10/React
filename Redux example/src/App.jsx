import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import Counter from "./Counter";
import { Provider } from "react-redux";

let counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state,action) => {
        console.log(action);
        return state +1;
    },
    decrement: (state,action) => {
        console.log(action)
        return state-1;
    },
    reset: (state,action) => {
        console.log(action)
        return state=0;
    },
  },
});

export let {increment ,decrement,reset}=counterSlice.actions

let myStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

const App = () => {
  return (
    <div>
      <h1>LEARN-REDUX</h1>
      <Provider store={myStore}>
        <Counter />
      </Provider>
    </div>
  );
};

export default App;
