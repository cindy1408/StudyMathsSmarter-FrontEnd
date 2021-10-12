import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux"

//Grabs the last quiz id (use for updating quiz score AND incase user wants to sign up)
export const fetchLatestQuizId = createAsyncThunk(
    'quizId/getQuizId', 
    async () => {
        const response = await fetch("http://localhost:8080/study_maths_smarter/quiz")
        const data = response.json();
        const lastQuizId = data[data.length-1].id;
        return lastQuizId;
    }
);

//PUT to addLocalDate to quiz
export const addLocalDate = createAsyncThunk(
    'addLocalDate',
    async () => {
        let quizId = useSelector(state => state.quizId.id);
        return fetch(`http://study_maths_smarter/quiz/${quizId}`, {
            method: "PUT", 
            headers: {'Content-Type': 'application/json'},
        })
    }
)

//Post an empty quiz when user clicks start in order to be able to update
export const startQuiz = createAsyncThunk(
    'quiz/startQuiz', 
    async () => {
        const quizResult = {
            question_g1_score: null, 
            question_g2_score: null, 
            question_s1_score: null, 
            question_s2_score: null, 
            question_t1_score: null, 
            question_t2_score: null, 
            result: null, 
            time_stamp: null, 
            user_id: null
        }
        fetch("http://localhost:8080/study_maths_smarter/quiz", {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(quizResult)
        });
    }
)

export const getQuizIdSlice = createSlice({
    //name of the slice 
    name: 'startQuiz', 
    initialState: [], 
    extraReducers: {
        [fetchLatestQuizId.fulfilled]: (state, action) => {
            return action.payload.quizId;
        }, 
        [startQuiz.fulfilled]: (state, {payload}) => {
            return payload;
        }
    }
})

// export action names (the ones in the reducers)
export const { addQuiz } = getQuizIdSlice.actions;
export default getQuizIdSlice.reducer;