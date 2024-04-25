import './App.css';
import React,{useEffect, useState} from "react";
import Recipe from "./Recipe";
import background from "./childe.jpg";
import ReactDOM from 'react-dom/client';
import { Link, useNavigate} from "react-router-dom"; // Import useHistory for navigation after login
import Home from "./Home.js"

const Intro = () => {

  return (
    <div style = {{backgroundImage: 'url(${background})' }} className="Intro">
      <h1 className="Intro-header">Welcome to Recipe Test App</h1>
      <button className="search-button"><Link style={{textDecoration: "none", color: "white"}} to="/Home">Enter?</Link></button>
    </div>
  );
}

export default Intro;
