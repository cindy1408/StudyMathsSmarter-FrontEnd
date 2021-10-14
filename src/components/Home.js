import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { startQuiz } from '../redux/startQuizSlice';
import { addTimeStamp } from '../redux/updateQuizSlice';
import './Home.css';
import Footer from './Footer';
import NavBar from './NavBar';

export default function Home(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    
    function handleClick(){
        dispatch(startQuiz());
        dispatch(addTimeStamp());
        history.push('/questions')
    }
    return (
        <div className="home-bg">
        <div className="homepage">
            <NavBar />
            <img className="logo" src='./resources/logo3.png' />
            <button className="homepageBtn" onClick={() => handleClick()}>Start Assessment!</button>
        </div>
        <Footer />
        </div>
    )
}