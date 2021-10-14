import React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { startQuiz } from "../redux/startQuizSlice";
import { addTimeStamp } from "../redux/updateQuizSlice";
import Cat from "../images/animated4.png";
import "./GCSEAssessment.css";

function AssessmentPic(props) {
  return <img className="mainBodyImage" src={props.imageSrc} />;
}

export default function GCSEAssessment(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(startQuiz());
    dispatch(addTimeStamp());
    history.push("/questions");
  }
  return (
    <div className="home-bg">
      <AssessmentPic imageSrc={Cat} />
      <button className="homepageBtn" onClick={() => handleClick()}>
        Start Assessment!
      </button>
    </div>
  );
}
