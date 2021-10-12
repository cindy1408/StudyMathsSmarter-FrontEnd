import { logDOM } from "@testing-library/react";
import React from "react";
import {Banner, MainBody} from "../components/cards.js";
import Logo from '../images/FR_English.png';
import "./homePage.css";

function homePage(){
    return (
       <>
      <Banner title="This is the home page" subText="Yes still home page"/>
      <div className="homePage">
            <MainBody imageSrc={Logo} title="GCSE " subText="Check back frequently for the latest COVID-19 travel and specific testing requirements for your destination, including any stops for connecting flights. You are required to come to the airport with the appropriate travel documents.'
"/>
</div>

      
      </>
)
}
export default homePage;