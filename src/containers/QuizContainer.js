import React from "react";

class QuizContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            quiz:[]
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
