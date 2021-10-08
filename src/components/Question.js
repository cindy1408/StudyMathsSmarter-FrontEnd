import AnswerButtons from "./AnswerButtons";
import './Question.css';

const Question = (props) => {
    return(
        <div className='question' id={props.id}>
            <h2>GCSE Assessment</h2>
            <h3>Question: {props.id + 1} - {JSON.stringify(props.question.topic)} - Level: {JSON.stringify(props.question.level)} </h3>
            {/* <h3>Answer: {JSON.stringify(props.question.answer)}</h3> */}
            {/* <a href={props.question.resource}>click here for extra questions!</a> */}
            <div className='questionImage'>
                <img src= {"data:image/png;base64," + props.question.question_image}  alt="Questions" /> 
            </div>

            <AnswerButtons id={props.id} nextQuestion={props.nextQuestion} />

        </div>
    )
}
export default Question; 