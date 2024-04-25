import './App.css';
import React,{useEffect, useState} from "react";
import Recipe from "./Recipe";
import background from "./childe.jpg";
import ReactDOM from 'react-dom/client';
import Home from "./Home.js"
import Intro from "./Intro.js"
import { Route, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/home",
      element:<Home/>,
    },
    {
      path:"/",
      element:<Intro/>,
      errorElement: <div>404 NOT FOUND</div>
    },
  ]);


  return (
    <div style = {{backgroundImage: 'url(${background})' }} className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
