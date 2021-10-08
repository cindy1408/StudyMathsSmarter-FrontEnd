import React from 'react';
import QuestionList from '../components/QuestionList';

class QuestionContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loaded: false, 
            questions: []
        }
    }
    componentDidMount() {
        fetch("http://localhost:8080/study_maths_smarter/question")
        .then((response) => response.json())
        .then(data => this.setState({ questions: data, loaded: true}))
        .catch(error => console.log(error))
    }

    render(){
        return(
            <div>
                <QuestionList questions={this.state.questions} />
                <h3>This is the question container</h3>
            </div>
        )
    }
}
export default QuestionContainer;