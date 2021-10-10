import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { startQuiz } from '../redux/getQuizSlice';

export default function Home(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    
    function handleClick(){
        //dispatch send Quiz info 
        dispatch(startQuiz());
        history.push('/questions')
        //dispatch(get quizID)
    }
    return (
        <button onClick={() => handleClick()}>Start Assessment!</button>
    )
}