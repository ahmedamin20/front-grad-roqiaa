import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import { Home } from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Navbar from "./Components/Navbar/Navbar";
import Results from "./Components/Results/results";
import { useState } from "react";
import Search from "./Components/Searching/search";
import AuthLayout from "./Components/Layout/AuthLayout";
import About from "./Components/About/about";
import Ecommerce from "./Components/ecommerce/ecommerce";


export default function App() {
  const [gloveId, setGloveId] = useState();
  function getFromlogin(glove_id) {
    setGloveId(glove_id);
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [ 
        { path: "", element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "login", element: <Login getFromlogin={getFromlogin} /> },
        { path: "register", element: <Register /> },
        { path: "*", element: <div className="bg-secondry vh-100"></div> }
      ]
    },
    {
    path: "/",
      element: <AuthLayout />,
      children: [
        { path: "results", element: <Results gloveId={gloveId} /> },
        { path: "About", element: <About /> },
        { path: "Ecommerce", element: <Ecommerce /> },
        { path: "search", element: <Search /> }
      ] 
    }
  ]);

  return (
    <>
      <Navbar />
      {<RouterProvider router={router} />}
    </>
  );
}
