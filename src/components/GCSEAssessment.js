import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { startQuiz } from '../redux/startQuizSlice';
import { addTimeStamp } from '../redux/updateQuizSlice';
import './GCSEAssessment.css';

export default function GCSEAssessment(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    
    function handleClick(){
        dispatch(startQuiz());
        dispatch(addTimeStamp());
        history.push('/questions')
    }
    return (
        <div className="home-bg">
        
            
            {/* <img className="logo" src='./resources/logo3.png' /> */}
            <button className="homepageBtn" onClick={() => handleClick()}>Start Assessment!</button>
        
    
        </div>
    )
}