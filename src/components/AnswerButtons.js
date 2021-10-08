import './AnswerButtons.css';

const AnswerButtons = (props) => {
    return(
        <div>
            <button onClick={()=> props.nextQuestion()}>A</button>
            <button onClick={()=> props.nextQuestion()}>B</button>
            <button onClick={()=> props.nextQuestion()}>C</button>
            <button onClick={()=> props.nextQuestion()}>D</button>
        </div>
    )
}
export default AnswerButtons;