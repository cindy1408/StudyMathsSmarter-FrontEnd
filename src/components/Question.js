
const Question = (props) => {
    return(
        <div className='question' id={props.id}>
            <h3>Topics: {JSON.stringify(props.question)}</h3>
            <h3>{JSON.stringify(props.question.topic)}</h3> 
            <img src= {"data:image/png;base64," + props.question.questionImage}  alt="Questions" /> 
        </div>
    )
}

export default Question; 