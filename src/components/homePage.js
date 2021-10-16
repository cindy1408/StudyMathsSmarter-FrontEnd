// import { logDOM } from "@testing-library/react";
import React from "react";
import {
  Banner,
  MainBody,
  MainBody2,
  MainBody3,
  MainBody4,
} from "../components/cards.js";
import ALevelsCard from "../images/animated3.png";
import GCSECard from "../images/animated8.png";
import "./homePage.css";

function homePage() {
  return (
    <>
      <Banner
        title="Interactive maths learning for all students"
        subText="Providing complete curriculum coverage from GCSE to A Level, decodeMaths offers quizzes, revision packs, along with a wealth of resources that will help you develop your confidence and fluency in maths."
      />
      <div className="homePage">
        <MainBody
          imageSrc={GCSECard}
          title="GCSE "
          subText="Our GCSE section includes a quiz which is a great tool for revising for any upcoming exams. The decodeMaths revision packs are designed to help students self-serve their independent learning. Packs include a curated set of revision lessons, homework tasks, and online worksheets that offer targeted revision in the run up to exams."
        />
        <MainBody2
          title="Testimonials "
          subText="decodeMaths has very helpful resource, for all students. You get variety of questions that let you understand the concept easily."
          subText2="Shelley Squadratics, Headteacher at Pi Squared Secondary
              School"
        />
        <MainBody4
          imageSrc={ALevelsCard}
          title="A-Levels "
          subText="Our A-Level section includes a quiz which is a great tool for revising for any upcoming AS/A-Level mocks or exams. The decodeMaths revision packs are designed to help students self-serve their independent learning. Packs include a curated set of revision lessons, homework tasks, and online worksheets that offer targeted revision in the run up to exams.
"
        />
        <MainBody3
          title="Ready to study maths smarter? "
          subText="Try our Quiz"
        />

        <div className="homePage"></div>
      </div>
    </>
  );
}
export default homePage;
