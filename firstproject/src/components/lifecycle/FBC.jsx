import React, { useState } from "react";
import { useEffect } from "react";
const FBC = () => {
  let [count, setCount] = useState(0);

  //todo ------> useEffect(()=>{},dependncyArray)

  //! 1:-RENDER
  useEffect(() => {
    console.log("I am working like render() ");
  });

  //! 2:-COMPONENTDIDMOUNT
  useEffect(()=>{
    console.log("component mounted")

    //!4:- COMPONENT WILL UNMOUNT
    return function(){
        //clean-up function
        console.log("component UNMOUNT");
    };
  },[])

  //! 3:-COMPONENTDIDUPDATE
  useEffect(()=>{
    console.log("component updated")

    //!GET SNAPSHOT BEFORE UPDATE
    return function(){
        console.log("Prev states was " ,count);
       }
  },[count]);

  return (
    <div>
      <h1>Life Cycle in FBC {count}</h1>
      <button onClick={() => {setCount(count + 1)}}>increment</button>
    </div>
  );
};

export default FBC;
