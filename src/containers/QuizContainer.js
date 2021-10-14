import React from "react";
import QuestionList from '../components/QuestionList';
class QuizContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            userId: 0,
            quiz:[],
            answers: {
                answerOne: null,
                answerTwo: null,
                answerThree: null,
                answerFour: null,
                answerFive: null,
                answerSix: null
            }
        }
    }
    componentDidMount(){
        this.getQuizData();
    }
    getQuizData(){
        fetch("http://localhost:8081/study_maths_smarter/quiz/start")
        .then(response => response.json())
        .then(data =>  this.setState({quiz:data, loaded:true}))
        .catch(error => console.log(error))
        console.log(this.state.quiz)
    }

    render(){
        return(
            <>
            <div>{this.state.quiz.map(question => <img src={`data:image/png;base64,${question.questionImage}`} />)}</div>
            </>
        )
    }
}

export default QuizContainer;
