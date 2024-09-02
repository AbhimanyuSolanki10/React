import React, { useState } from "react";
import { useEffect } from "react";
const FBC = () => {
  let [count, setCount] = useState(0);

  //todo ------> useEffect(()=>{},dependncyArray)

  //! RENDER
  useEffect(() => {
    console.log("I am working like render() ");
  });

  //! COMPONENTDIDMOUNT
  useEffect(()=>{
    console.log("component mounted")

    //! COMPONENT WILL UNMOUNT
    return function(){
        //clean-up function
        console.log("component unmount");
    };
  },[])

  //! COMPONENTDIDUPDATE
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
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increment
      </button>
    </div>
  );
};

export default FBC;
