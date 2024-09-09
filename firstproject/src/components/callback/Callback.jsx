import React, { useState } from "react";
import { useCallback } from "react";
import ChildA from "./ChildA";
import { useMemo } from "react";

const Callback = () => {
  let [add, setAdd] = useState(0);
  let [minus, setMinus] = useState(100);

//   function multiply() {
//     console.log("*************************");
    
//     return add * 5;
//   }

  // return memoized value
  const multiply = useMemo(()=>{
      console.log("====================");
      return add *5 ;
  },[add])

//   function display(){
//       console.log("i am display fuction")

//   }
  // return memoized fucntion
  const display = useCallback(()=>{
      console.log("i am display fuction")
  },[])
  return (
    <div>
      <h1>Memo Example</h1>
      <h2>Multiply = {multiply}</h2>
      <h2>Add = {add}</h2>
      <button onClick={() => setAdd(add + 1)}>Addition</button>
      <hr />
      <h2>Minus = {minus}</h2>
      <button onClick={() => setMinus(minus - 1)}>Subtraction</button>
      <ChildA display={display}/>
    </div>
  );
};

export default Callback;
