import AnswerButtons from "./AnswerButtons";

const Question = (props) => {
    return(
        <div className='question' id={props.id}>
            <h3>GCSE Assessment</h3>
            <h3>Topic: {JSON.stringify(props.question.topic)}</h3>
            <h3>Level: {JSON.stringify(props.question.level)}</h3>
            {/* <h3>Answer: {JSON.stringify(props.question.answer)}</h3> */}
            <a href={props.question.resource}>click here for extra questions!</a>
            <img src= {"data:image/png;base64," + props.question.questionImage}  alt="Questions" /> 

            <AnswerButtons nextQuestion={props.nextQuestion} />

        </div>
    )
}
export default Question; 