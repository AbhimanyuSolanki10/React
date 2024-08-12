import { createRoot } from "react-dom/client"
import App from "./App"
//import { Fragment } from "react"
// createRoot is method 
let div = document.getElementById("root")

// Fragment will wrap the element and not creat the node
createRoot(div).render(<App></App>)
