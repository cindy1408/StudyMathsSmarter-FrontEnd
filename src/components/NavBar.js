import React from "react";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';

function NavBar() {
  return (

    <div>
    <nav className="  navbar navbar-expand-lg navbar-light">
    <img className="logo" src='./resources/logo3.png'/>

   

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ">
    <Link className="nav-link" to="/homePage">
      <li class="fontNav nav-item active addPadding">
         HOME
      </li>
      </Link>
      <Link className="nav-link" to="/gcse">
      <li class="fontNav nav-item active addPadding">
         GCSE
      </li>
      </Link>
      <Link className="nav-link" to="/igcse">
      <li class="fontNav nav-item active">
         IGCSE
      </li>
      </Link>
      <Link className="nav-link" to="/asLevel">
      <li class="fontNav nav-item active">
         AS-LEVEL
      </li>
      </Link>
      <Link className="nav-link" to="/aLevel">
      <li class="fontNav nav-item active">
         A-LEVEL
      </li>
      </Link>        
      </ul>
      
      <span class="fontNav navbar-text">
      Login/Sign Up
    </span>
    
    
  </div>
 
</nav>
{/*<p>I am always here</p>*/}
</div>
  );
  }

export default NavBar;




// id="navbarNav" --> Line 19