import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <div>
<<<<<<< HEAD


    <nav className="navbar navbar-expand-lg navbar-light">
  
   

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class=" centerContentNav navbar-collapse" id="">
  <img className="logo" src='./resources/logo.png'/>
    <ul class="navbar-nav ">
    <Link className="nav-link" to="/homePage">
      <li class="fontNav nav-item active navBarStyling">
         HOME
      </li>
      </Link>
      <Link className="nav-link" to="/gcse">
      <li class="fontNav nav-item active navBarStyling">
         GCSE
      </li>
      </Link>
      <Link className="nav-link" to="/igcse">
      <li class="fontNav nav-item active navBarStyling">
         IGCSE
      </li>
      </Link>
      <Link className="nav-link" to="/asLevel">
      <li class="fontNav nav-item active navBarStyling">
         AS
      </li>
      </Link>
      <Link className="nav-link" to="/aLevel">
      <li class="fontNav nav-item active navBarStyling">
         A-LEVEL
      </li>
      </Link>   
      <Link className="nav-link" to="/login">
      <li class="fontNav nav-item active navBarStyling">
     LOGIN
      </li>
      </Link>     
      </ul>
      
      
    
  </div>
 
</nav>
{/*<p>I am always here</p>*/}
</div>
=======
      <nav className="navbar navbar-expand-lg navbar-light">
        <div class=" centerContentNav navbar-collapse" id="">
          <img className="logo" src="./resources/logo.png" />
          <ul class="navbar-nav ">
            <Link className="nav-link" to="/homePage">
              <li class="fontNav nav-item active navBarStyling">HOME</li>
            </Link>
            <Link className="nav-link" to="/GCSEStart">
              <li class="fontNav nav-item active navBarStyling">GCSE</li>
            </Link>
            <Link className="nav-link" to="/comingSoon">
              <li class="fontNav nav-item active navBarStyling">IGCSE</li>
            </Link>
            <Link className="nav-link" to="/comingSoon">
              <li class="fontNav nav-item active navBarStyling">AS</li>
            </Link>
            <Link className="nav-link" to="/comingSoon">
              <li class="fontNav nav-item active navBarStyling">A-LEVEL</li>
            </Link>
            <Link className="nav-link" to="/login">
              <li class="fontNav nav-item active navBarStyling">LOGIN</li>
            </Link>
          </ul>
        </div>
      </nav>
      {/*<p>I am always here</p>*/}
    </div>
>>>>>>> b43c461649c6619908f44f795093f6b4334ca351
  );
}

export default NavBar;
