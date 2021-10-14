import { logDOM } from "@testing-library/react";
import React from "react";
import {Banner, MainBody,MainBody2,MainBody3,} from "../components/cards.js";
import Logo from '../images/FR_English.png';
import GCSEMath from '../images/gcseMathPaper.png';
import Smile from '../images/smile.png';
import "./homePage.css";

function homePage(){
    return (
       <>
      <Banner title="Interactive maths learning for all students" subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat orci, vehicula id suscipit in, scelerisque sed sapien. In vulputate euismod justo, id sagittis sem pellentesque sed. Aliquam in quam"/>
      <div className="homePage">
            <MainBody imageSrc={GCSEMath} title="GCSE " subText="Check back frequently for the latest COVID-19 travel and specific testing requirements for your destination, including any stops for connecting flights. You are required to come to the airport with the appropriate travel documents.'"/>
            <MainBody2 imageSrc={Smile} title="Testimonials " subText="SO FUN IH IH"/>
            <MainBody imageSrc={Logo} title="A-Levels " subText="Check back frequently for the latest COVID-19 travel and specific testing requirements for your destination, including any stops for connecting flights. You are required to come to the airport with the appropriate travel documents.'"/>
            <MainBody3 imageSrc={Logo} title="Ready to study maths smarter? " subText="Try our Quiz"/>
          
            
      <div className="homePage"></div>
</div>

      
      </>
)
}
export default homePage;