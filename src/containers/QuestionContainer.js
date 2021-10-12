import React from 'react';
import QuestionList from '../components/QuestionList';
class QuestionContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loaded: false, 
            questions: [],
        }
        this.nextQuestion = this.nextQuestion.bind(this);
    }
    componentDidMount() {
        fetch("http://localhost:8080/study_maths_smarter/question")
        .then((response) => response.json())
        .then(data => this.setState({ questions: data, loaded: true}))
        .catch(error => console.log(error))
    }

    nextQuestion(){
        let i = this.state.questionNum; 
        this.setState({questionNum: i+1})
    }

    render(){

        return(
            <div>
                <QuestionList questions={this.state.questions} />
            </div>
        )
    }
}
export default QuestionContainer;