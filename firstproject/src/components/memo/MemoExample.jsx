import React, { useMemo, useState } from 'react'

const MemoExample = () => {
    let [add ,setAdd] =useState(0);
    let [minus,setMinus] = useState(100);


    let multiply = useMemo(()=>{
        console.log("*****************************")
        return add*5; 
    },[add]);

  return (
    <div>
        <h1>Memo Example</h1>
       <h2>Multiply =  {multiply}</h2>
        <h2>Add = {add}</h2>
        <button onClick={()=> setAdd(add + 1)}>Addition</button>
        <hr/>
        <h2>Minus  = {minus}</h2>
        <button onClick={()=> setMinus(minus-1)}>Subtraction</button>

    </div>
  )
}

export default MemoExample