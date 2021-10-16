import React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { startQuiz } from "../redux/startQuizSlice";
import { addTimeStamp } from "../redux/updateQuizSlice";
import AssessmentGcse from "../images/animated4.png";
import "./GCSEAssessment.css";
import { resetQuestion } from "../redux/questionSlice";

function AssessmentPic(props) {
  return <img className="mainBodyImage" src={props.imageSrc} />;
}

export default function GCSEAssessment(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(resetQuestion());
    dispatch(startQuiz());
    dispatch(addTimeStamp());
    history.push("/questions");
  }
  return (
    <div className="home-bg">
      {/* <AssessmentPic imageSrc={AssessmentGcse} /> */}
      <button className="homepageBtn" onClick={() => handleClick()}>
        Start Assessment!
      </button>
    </div>
  );
}
