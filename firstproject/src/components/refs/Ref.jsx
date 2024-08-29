import React from 'react'
import { useRef } from 'react'

const Ref = () => {
    let demoRef = useRef();
    function change(){
        console.log(demoRef)
        // console.log(demoRef.current.textContent);
        // demoRef.current.style.backgroundColor="red";
    }
  return (
    <div>
        <h1 ref={demoRef}>useRef Exampl <div>hello</div></h1>
        <button onClick={change}>click</button>
    </div>
  )
}

export default Ref