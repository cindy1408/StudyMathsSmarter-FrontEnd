// import { logDOM } from "@testing-library/react";
import React from "react";
import {Banner, MainBody,MainBody2,MainBody3,} from "../components/cards.js";
import PupilTeacher from '../images/FR_English.png';
import GCSEMath from '../images/gcseMathPaper.png';
import Smile from '../images/logo3.png';
import "./homePage.css";

function homePage(){
    return (
       <>
      <Banner title="Interactive maths learning for all students" subText="Providing complete curriculum coverage from GCSE to A Level, decodeMaths offers quizzes, revision packs, along with a wealth of resources that will help you develop your confidence and fluency in maths."/>
      <div className="homePage">
            <MainBody imageSrc={GCSEMath} title="GCSE " subText="Our GCSE section includes a quiz which is a great tool for revising for any upcoming exams. The decodeMaths revision packs are designed to help students self-serve their independent learning. Packs include a curated set of revision lessons, homework tasks, and online worksheets that offer targeted revision in the run up to exams."/>
            <MainBody2  title="Testimonials " subText="SO FUN IH IH"/>
            <MainBody imageSrc={PupilTeacher} title="A-Levels " subText="Check back frequently for the latest COVID-19 travel and specific testing requirements for your destination, including any stops for connecting flights. You are required to come to the airport with the appropriate travel documents.'"/>
            <MainBody3  title="Ready to study maths smarter? " subText="Try our Quiz"/>
          
            
      <div className="homePage"></div>
</div>

      
      </>
)
}
export default homePage;