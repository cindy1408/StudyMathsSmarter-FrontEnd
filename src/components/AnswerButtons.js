import './AnswerButtons.css';

const AnswerButtons = (props) => {

    function postUserResponse(){
        if(props.id == 9){
            <button>Submit</button>
            // history.push(`/submit`)
        }
        props.nextQuestion()
    }

    return(
        <div>
            <button onClick={()=> postUserResponse()}>A</button>
            <button onClick={()=> postUserResponse()}>B</button>
            <button onClick={()=> postUserResponse()}>C</button>
            <button onClick={()=> postUserResponse()}>D</button>
        </div>
    )
}
export default AnswerButtons;