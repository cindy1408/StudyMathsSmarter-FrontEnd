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
  <div class="navBarAlign collapse navbar-collapse " > 
    <ul class="navbar-nav">
      <Link className="nav-link" to="/gcse">
      <li class="nav-item active">
         GCSE
      </li>
      </Link>
      <Link className="nav-link" to="/igcse">
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