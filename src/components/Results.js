import React from 'react';
import {useSelector} from "react-redux";

export default function Results(){
    let result = useSelector(state => state.quizResult.result);
    let percentage = Math.round((result/9)*100)
    return(
        <div>
            <h3>Thank you for taking our quiz</h3>
            <h3>Your result is: {result} out of 9</h3>
            <h3>Percentage: {percentage} % </h3>
            <h3>Strength: </h3>
            <h3>Topics to improve on: </h3>
        </div>
    )
}