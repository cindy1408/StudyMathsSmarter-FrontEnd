import Question from './Question';
import {useSelector} from "react-redux"
import Footer from "./Footer";


const QuestionList = (props) => {
    let questionNum = useSelector(state => state.questions.questionNum);
    let questionList = [];
    
    for(let i = 0; i < props.questions.length; i++){
        let eachQuestion = props.questions[i];
        let questionComponent = <Question id={i} question={eachQuestion} resource={props.resource} />
        questionList.push(questionComponent); 
    }
    return(
        <div>
            {questionList[questionNum]}
            
        </div>
    )
}
export default QuestionList; 