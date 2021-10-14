import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <div>
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
  );
}

export default NavBar;
