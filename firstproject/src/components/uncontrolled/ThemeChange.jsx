import React, { useRef } from 'react'

const ThemeChange = () => {
    let demoRef=useRef();

    function lightTheme (){
        demoRef.current.style.color='black';
        document.body.style.backgroundColor='gainsboro'
    }
    function darkTheme (){
        demoRef.current.style.color='white';
        document.body.style.backgroundColor='black'
    }
  return (
    <div>
        <h1 ref={demoRef}>Hello World</h1>
        <button onClick={lightTheme}>Light</button>
        <button onClick={darkTheme} >Dark</button>
    </div>
  )
}

export default ThemeChange