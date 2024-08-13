import { useState } from "react";
const States = ()=>{
    // console.log(useState())
    let [state,setState]= useState("Hello Js");
    console.log(state);
    console.log(setState);

    function handleChange(){
        console.log('clicked')
        setState("Hello React");
    }

    return (
        <>
            <h1>States Example</h1>
            <h1>{state}</h1>
            <button onClick={handleChange}>change</button>
        </>
    )
}
export default States;
