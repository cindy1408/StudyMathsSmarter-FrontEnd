import React from "react";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';



function NavBar() {
  return (

    <div>


    <nav className="navbar navbar-expand-lg navbar-light">
  
   

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class=" centerContentNav navbar-collapse" id="">
  <img className="logo" src='./resources/logo.png'/>
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
      <li class="fontNav nav-item active addPadding">
         IGCSE
      </li>
      </Link>
      <Link className="nav-link" to="/asLevel">
      <li class="fontNav nav-item active addPadding">
         AS-LEVEL
      </li>
      </Link>
      <Link className="nav-link" to="/aLevel">
      <li class="fontNav nav-item active addPadding">
         A-LEVEL
      </li>
      </Link>   
      <Link className="nav-link" to="/login">
      <li class="fontNav nav-item active addPadding">
     LOGIN
      </li>
      </Link>     
      </ul>
      
      
    
  </div>
 
</nav>
{/*<p>I am always here</p>*/}
</div>
  );
  }

export default NavBar;




// id="navbarNav" --> Line 19