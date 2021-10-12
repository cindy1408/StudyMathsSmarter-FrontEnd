import React from "react";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';



function NavBar() {
  return (

    <nav className="  navbar navbar-expand-lg navbar-light">
         
    <img className="logo" src='./resources/logo3.png'/>
   

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
<<<<<<< HEAD
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ">
      <Link className="nav-link" to="/gcse">
      <li class="nav-item active addPadding">
=======
  <div class="navBarAlign collapse navbar-collapse " > 
    <ul class="navbar-nav">
      <Link className="nav-link" to="/gcse">
      <li class="nav-item active">
>>>>>>> ada738768dc9d5045201fc6aa6de2593f0a756dc
         GCSE
      </li>
      </Link>
      <Link className="nav-link" to="/igcse">
<<<<<<< HEAD
      <li class="nav-item active addPadding">
         IGCSE
      </li>
      </Link>
      <Link className="nav-link" to="/asLevel">
      <li class="nav-item active addPadding">
         AS-LEVEL
      </li>
      </Link>
      <Link className="nav-link" to="/aLevel">
      <li class="nav-item active addPadding">
         A-LEVEL
      </li>
      </Link>
=======
      <li class="nav-item active">
         IGCSE
      </li>
      </Link>
      <Link className="nav-link" to="/as-level">
      <li class="nav-item active">
         AS-LEVEL
      </li>
      </Link>
      <Link className="nav-link" to="/a-level">
      <li class="nav-item active">
         A-LEVEL
      </li>
      </Link>        
>>>>>>> ada738768dc9d5045201fc6aa6de2593f0a756dc
      </ul>
      
      <span class="navbar-text">
      Login/Sign Up
    </span>
    
    
  </div>
</nav>
  );
  }

export default NavBar;




// id="navbarNav" --> Line 19