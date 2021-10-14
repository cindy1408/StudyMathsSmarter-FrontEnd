// import { logDOM } from "@testing-library/react";
import React from "react";
import Logo from '../images/FR_English.png';
import "./homePage.css";
import NavBar from "./NavBar.js";
import Footer from "./Footer";

function homePage(){
    return (
       <div className="homepage">
       <NavBar />
      {/* <Banner title="This is the home page" subText="Yes still home page"/> */}
            <div className="aboutPage">
                  <div>
                        <img id="homepageImage" src={Logo} />
                  </div>
                  <div>
                        <p>"Check back frequently for the latest COVID-19 travel and specific testing requirements for your destination, including any stops for connecting flights. You are required to come to the airport with the appropriate travel documents.'</p> 
                  </div>  
            </div> 
            <div className='footer'>
                  <Footer />  
            </div>
      </div>
      
)
}
export default homePage;