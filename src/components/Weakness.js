import React, { useEffect } from 'react';
import './Weakness.css';
import { useSelector, useDispatch } from "react-redux";
import { getQuestionsDb } from '../redux/getQuestionSlice';

export default function Weakness(props){
    let { questions } = useSelector((state) => state.questionDb);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getQuestionsDb())
    }, [dispatch]);

    const resource = questions && questions.map((question, i) => <p key={i}>{question.resource}</p>)

    let requiredResources = [];
    function resources(){
        if(resource[3] == undefined || resource[3] == null){
            return null;
        }
        for(let i=0; i < props.topics.length; i++){
            if(props.topics[i] == "Geometery"){               
                requiredResources.push(resource[3].props.children);
            } else if(props.topics[i] == "Solving Equation"){
                requiredResources.push(resource[0].props.children);
            } else if(props.topics[i] == "Trigonometry"){
                requiredResources.push(resource[7].props.children)
            }
        }
    }
    return(
        <div className='weakness'>
          {resources()}
            <div className='weaknessTopics'>
                <h3>Topics to improve on: </h3>
                <h3>{props.topics.map(eachTopic => {
                    return <h4>{eachTopic}<br /></h4>
                })}</h3>
            </div>
            <div className='weaknessResources'>
                <h3>
                    {requiredResources.map(eachTopic => <div><a href={eachTopic} target="_blank">
                        Click here for examination!<br /></a></div>
                )}
                </h3> 
            </div>    
        </div>
    )
}