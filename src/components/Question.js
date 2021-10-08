
const Question = (props) => {
    var base64Image = `data:image/png;base64, ${props.question.questionImage}`;
    return(
        <div className='question' id={props.id}>
            <h3>Topics: {JSON.stringify(props.question)}</h3>
            <h3>{JSON.stringify(props.question.topic)}</h3>  
            {/* <h3>{props.question.topic}</h3>     */}
            <img src={{url: base64Image}} alt="Questions" /> 
        </div>
    )
}

export default Question; 