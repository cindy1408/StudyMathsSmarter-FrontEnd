import "./AnswerButtons.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { nextQuestion } from "../redux/questionSlice";
import { useSelector } from "react-redux";
import {
  addG1Score,
  addG2Score,
  addG3Score,
  addS1Score,
  addS2Score,
  addS3Score,
  addT1Score,
  addT2Score,
  addT3Score,
} from "../redux/updateQuizSlice";

const AnswerButtons = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  let questionNum = useSelector((state) => state.questions.questionNum);

  function postUserResponse(value) {
    switch (questionNum) {
      case 0:
        if (value == "a") {
          dispatch(addG1Score());
        }
        dispatch(nextQuestion());
        break;
      case 1:
        if (value == "a") {
          dispatch(addG2Score());
        }
        dispatch(nextQuestion());
        break;
      case 2:
        if (value == "d") {
          dispatch(addG3Score());
        }
        dispatch(nextQuestion());
        break;
      case 3:
        if (value == "b") {
          dispatch(addS1Score());
        }
        dispatch(nextQuestion());
        break;
      case 4:
        if (value == "c") {
          dispatch(addS2Score());
        }
        dispatch(nextQuestion());
        break;
      case 5:
        if (value == "a") {
          dispatch(addS3Score());
        }
        dispatch(nextQuestion());
        break;
      case 6:
        if (value == "d") {
          dispatch(addT1Score());
        }
        dispatch(nextQuestion());
        break;
      case 7:
        if (value == "b") {
          dispatch(addT2Score());
        }
        dispatch(nextQuestion());
        break;
      case 8:
        if (value == "c") {
          dispatch(addT3Score());
        }
        history.push("/results");
        break;
    }
  }

  return (
    <div className="answer-button-bg">
      <button
        className="raise buttonAnswers"
        value={"a"}
        onClick={() => postUserResponse("a")}
      >
        A
      </button>
      <button
        className="raise buttonAnswers"
        value={"b"}
        onClick={() => postUserResponse("b")}
      >
        B
      </button>
      <button
        className="raise buttonAnswers"
        value={"c"}
        onClick={() => postUserResponse("c")}
      >
        C
      </button>
      <button
        className="raise buttonAnswers"
        value={"d"}
        onClick={() => postUserResponse("d")}
      >
        D
      </button>
    </div>
  );
};
export default AnswerButtons;
