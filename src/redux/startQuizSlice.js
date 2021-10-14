import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";
import { getLastQuizId } from "./getQuizSlice";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from 'react';

//PUT to addLocalDate to quiz
export const addLocalDate = createAsyncThunk(
    'addLocalDate',
    async () => {

        let { quizId } = useSelector((state) => state.quizDb);
        const dispatch = useDispatch();
    
        useEffect(() => {
            dispatch(getLastQuizId())
        }, [dispatch]);
    
        const lastQuidId = quizId && quizId.map((quiz, i) => <p key={i}>{quiz}</p>)

        return fetch(`http://study_maths_smarter/quiz/${quizId}`, {
            method: "PUT", 
            headers: {'Content-Type': 'application/json'},
        })
    }
)
//Post an empty quiz when user clicks start in order to be able to update
export const startQuiz = createAsyncThunk(
    'quiz/startQuiz', 
    async (dispatch, getState) => {
        const quizResult = {
            question_s1_score: null, 
            question_s2_score: null, 
            question_s3_score: null, 
            question_g1_score: null, 
            question_g2_score: null,
            question_g3_score: null,  
            question_t1_score: null, 
            question_t2_score: null, 
            question_t3_score: null, 
            result: null, 
            time_stamp: null, 
            user_id: null
        }
        await fetch("http://localhost:8080/study_maths_smarter/quiz", {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(quizResult)
        });
    }
)

export const startQuizSlice = createSlice({
    //name of the slice 
    name: 'startQuiz', 
    initialState: {
        startQuiz: [],
        localDate: null,
        status: null
    }, 
    extraReducers: {
        [startQuiz.fulfilled]: (state, payload) => {
            state.status = "sucess";
            state.startQuiz = payload;
        }, 
        [startQuiz.pending]: (state, payload) => {
            state.status = "loading";
        },
        [startQuiz.rejected]: (state, payload) => {
            state.status = "rejected";
        }, 
        [addLocalDate.fulfilled]: (state, payload) => {
            state.status = "sucess";
            state.localDate = payload;
        }, 
        [addLocalDate.pending]: (state, payload) => {
            state.status = "loading";
        },
        [addLocalDate.rejected]: (state, payload) => {
            state.status = "rejected";
        }, 
    }
})


// export action names (the ones in the reducers)
export const { addQuiz, localDate } = startQuizSlice.actions;
export default startQuizSlice.reducer;