import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getQuestionsDb = createAsyncThunk(
    'question/getquestionsdb', 
    async (dispatch, getState) => {
        return await fetch("http://localhost:8080/study_maths_smarter/question")
        .then((res) => res.json());
    }
);

export const questionsSlice = createSlice({
    name: "question",
    initialState: {
        questions: [], 
        status: null
    }, 
    extraReducers: {
       [getQuestionsDb.pending]: (state, action) => {
           state.status = "loading"
       }, 
       [getQuestionsDb.fulfilled]: (state, action) => {
            state.status = "success"; 
            state.questions = action.payload;
       }, 
       [getQuestionsDb.rejected]: (state, action) => {
           state.status = "failed";
       }
    }
})

export default questionsSlice.reducer;