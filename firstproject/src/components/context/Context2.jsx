import React, { createContext } from 'react'

export let GLOBALDATA = createContext();
const Context2 = (props) => {
    console.log("Props children ",props.children);
    let data = [10,20,30,40,50];
    return (
        <GLOBALDATA.Provider value={data}>{props.children}</GLOBALDATA.Provider>
  )
}

export default Context2