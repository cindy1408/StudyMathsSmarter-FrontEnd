import React from 'react';

class QuestionContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loaded: false, 
            questions: []
        }
    }
    componentDidMount() {
        fetch("http://localhost:8080/study_maths_smarter/questions")
        .then((response) => response.json())
        .then(data => this.setState({ questions: data, loaded: true}))
        .catch(error => console.log(error))
    }

    render(){
        <div>
            {/* Question component */}
        </div>
    }
}
export default QuestionContainer;