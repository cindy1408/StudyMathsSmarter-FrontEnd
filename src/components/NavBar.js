import React from "react";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';



function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
         
    <img className="logo" src='./resources/logo3.png'/>
   

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="./pages/gcse.js"> GCSE </a>
      </li>
         <li class="nav-item">
        <a class="nav-link" href="#">IGCSE</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">AS-Level</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">A-Levels</a>
      </li>
      </ul>
      
      <span class="navbar-text">
      Login/Sign Up
    </span>
    
    
  </div>
</nav>
  );
  }

export default NavBar;
