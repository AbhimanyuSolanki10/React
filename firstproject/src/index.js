import { createRoot } from "react-dom/client"
import App from "./App"
import React from "react";

//import { Fragment } from "react"
// createRoot is method 
let div = document.getElementById("root")

// Fragment will wrap the element and not creat the node
createRoot(div).render(<App></App>)
