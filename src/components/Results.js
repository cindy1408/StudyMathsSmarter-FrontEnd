import React from "react";
import { useSelector } from "react-redux";
import { resetQuestion } from "../redux/questionSlice";
import "./Result.css";
import Weakness from "./Weakness";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { startQuiz } from "../redux/startQuizSlice";
import { addTimeStamp } from "../redux/updateQuizSlice";

export default function Results(props) {
  let result = useSelector((state) => state.quizResult.result);
  let percentage = Math.round((result / 9) * 100);
  let g1 = useSelector((state) => state.quizResult.question_g1_score);
  let g2 = useSelector((state) => state.quizResult.question_g2_score);
  let g3 = useSelector((state) => state.quizResult.question_g3_score);
  let s1 = useSelector((state) => state.quizResult.question_s1_score);
  let s2 = useSelector((state) => state.quizResult.question_s2_score);
  let s3 = useSelector((state) => state.quizResult.question_s3_score);
  let t1 = useSelector((state) => state.quizResult.question_t1_score);
  let t2 = useSelector((state) => state.quizResult.question_t2_score);
  let t3 = useSelector((state) => state.quizResult.question_t3_score);

  let geometeryScore = g1 + g2 + g3;
  let solvingEquationScore = s1 + s2 + s3;
  let trigonometryScore = t1 + t2 + t3;

  let strength = [];

    if(geometeryScore == 3){
        strength.push("Geometry")
    }
    if(solvingEquationScore == 3){
        strength.push("Solving Equation")
    }
    if(trigonometryScore == 3){
        strength.push("Trigonometry")
    }

  let weakness = [];

    if(geometeryScore <= 2){
        weakness.push("Geometry")
    }
    if(solvingEquationScore <= 2){
        weakness.push("Solving Equation")
    }
    if(trigonometryScore <= 2){
        weakness.push("Trigonometry")
    }

  const history = useHistory();
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(startQuiz());
    dispatch(resetQuestion());
    dispatch(addTimeStamp());
    history.push("/questions");
  }

  function goHome() {
    dispatch(resetQuestion());

    history.push("/");
  }

  return (
    <div>
      <div className="resultSection">
        <h2>Thank you for taking our quiz</h2>
        <div className="resultScore">
          <h3>
            Your result is: {percentage} % ({result} out of 9)
          </h3>
        </div>
        <div className="strengthAndWeakness">
          <div className="strength">
            <h3>Strength: </h3>
            <h3>
              {strength.map((eachTopic) => {
                return <h4>{eachTopic}</h4>;
              })}
            </h3>
          </div>
          <div className="improve">
            <Weakness topics={weakness} />
          </div>
        </div>
        <button className="tryAgain" onClick={() => handleClick()}>
          Try again
        </button>
        <button className="homePageButtonResults" onClick={() => goHome()}>
          Home Page
        </button>
      </div>
    </div>
  );
}
