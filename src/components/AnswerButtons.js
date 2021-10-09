import './AnswerButtons.css';
import { useDispatch } from 'react-redux';
import { nextQuestion } from '../redux/questionSlice';

const AnswerButtons = (props) => {
    const dispatch = useDispatch();

    function postUserResponse(){
        if(props.id == 9){
            <button>Submit</button>
            // history.push(`/submit`)
        }
        dispatch(nextQuestion())
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