import React from "react";
import "./NavBar.css";
import {Link} from 'react-router-dom';

export default function NavBar(){
  return (
    <div className = 'navbar'>
        <nav>
        <div id="navbarNav">
        <ul class="navbar-nav">
    <Link className="nav-link" to="/homepage">
      <li >
         HOME
      </li>
      </Link>
      <Link className="nav-link" to="/GCSEStart">
      <li>
         GCSE
      </li>
      </Link>
      <Link className="nav-link" to="/comingSoon">
      <li>
         IGCSE
      </li>
      <p>coming soon!</p>
      </Link>
      <Link className="nav-link" to="/comingSoon">
      <li >
         AS-LEVEL
      </li>
      <p>coming soon!</p>
      </Link>
      <Link className="nav-link" to="/comingSoon">
      <li >
         A-LEVEL
      </li>
      <p>coming soon!</p>
      </Link>     

    <Link className="nav-link" to="/login">
      <li >
         Login/Register
      </li>
      </Link >     
      </ul>

    
    
  </div>
 
</nav>
</div>
  );
  }
