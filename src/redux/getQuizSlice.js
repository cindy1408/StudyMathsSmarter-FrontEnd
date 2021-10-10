import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//Grabs the last quiz id (use for updating quiz score AND incase user wants to sign up)
export const getQuizSlice = createAsyncThunk(
    'getQuizId', 
    async () => {
        const response = await fetch("http://localhost:8080/study_maths_smarter/quiz");
        if(response.ok){
            const data = await response.json();
            const quizId = data[data.length - 1].id;
            return {quizId}
        }
    }
)

//Post an empty quiz when user clicks start in order to be able to update
export const startQuiz = createAsyncThunk(
    'startQuiz', 
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
    name: 'startQuiz', 
    initialState: [], 
    extraReducers: {
        [getQuizSlice.fulfilled]: (state, action) => {
            return action.payload.quizId;
        }, 
        [startQuiz.fulfilled]: (state, action) => {
            console.log(state);
        }
    }
})

export const { addQuiz } = getQuizIdSlice.actions;
export default getQuizIdSlice.reducer;