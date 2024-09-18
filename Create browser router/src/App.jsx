import React from "react";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Layout from "./pages/Layout";

const App = () => {
  let myRoutes = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children:[
            {
                // path: "/",
                index:true,
                element: <Home/>,
              },
              {
                path: "/about",
                element: <About/>,
              },
              {
                path: "/projects",
                element: <Projects/>,
              },
              {
                path: "/contacts",
                element: <Contacts/>,
              },
        ]
    }
  ]);
  return (
    <div>
      <RouterProvider router={myRoutes}></RouterProvider>
    </div>
  );
};

export default App;
