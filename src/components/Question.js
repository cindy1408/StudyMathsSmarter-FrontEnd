import AnswerButtons from "./AnswerButtons";
import './Question.css';

const Question = (props) => {
    let topic; 
    switch(JSON.stringify(props.question.topic)){
        case "\"SOLVING_EQUATION\"" :
             topic = "Solving Equations"
             break;
        case "\"GEOMETRY\"" : 
            topic = "Geometry"
            break; 
        case "\"TRIGONOMETRY\"" :
            topic = "Trigonometry"
            break; 
    }
    return(
        <div className="question-bg">
               <div className='question' id={props.id}>
            <h2>GCSE Assessment</h2>
            <h3>Question: {props.id + 1} - {topic} - Level: {JSON.stringify(props.question.level)} </h3>
            <div className='questionImage'>
                <img className="imgQuestion" src= {"data:image/png;base64," + props.question.question_image}  alt="Questions" /> 
            </div>

            <AnswerButtons id={props.id} resource={props.question.resource}/>

        </div>
        </div>
    )
}
export default Question; 