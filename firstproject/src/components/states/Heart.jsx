import { useState } from "react"


const Heart = ()=>{
    let [state,setState]=useState(0);
    let incre =()=>{
        setState(state+1)
    }

    return (
        <>
            <h1 onClick={incre} style={{cursor:"pointer"}}>💖<sup>{state}</sup></h1>
        </>
    );
};
export default Heart;