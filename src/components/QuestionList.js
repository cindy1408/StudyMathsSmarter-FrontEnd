import Question from './Question';

const QuestionList = (props) => {
    let questionList = [];
    for(let i = 0; i < props.questions.length; i++){
        let eachQuestion = props.questions[i];
        let questionComponent = <Question id={i} question={eachQuestion} questNum = {props.number} nextQuestion={props.nextQuestion} />
        questionList.push(questionComponent); 
    }
    return(
        <div>
            {questionList[props.number]}
        </div>
    )
}
export default QuestionList; 