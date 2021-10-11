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
      <Link className="nav-link" to="/gcse">
      <li class="nav-item active">
         GCSE
      </li>
      </Link>
        
      </ul>
      
      <span class="navbar-text">
      Login/Sign Up
    </span>
    
    
  </div>
</nav>
  );
  }

export default NavBar;
