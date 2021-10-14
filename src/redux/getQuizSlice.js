import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux"


//Grabs the last quiz id (use for updating quiz score AND incase user wants to sign up)
export const getLastQuizId = createAsyncThunk(
    'quizId/getQuizId', 
    async (dispatch, getState) => {
        return await fetch("http://localhost:8080/study_maths_smarter/quiz")
        .then((res) => res.json())
        .then(res =>res[res.length - 1].id);
    }
);

export const getQuizIdSlice = createSlice({
    //name of the slice 
    name: 'getQuizId', 
    initialState: {
        quizId: 0, 
        status: null
    }, 
    extraReducers: {
        [getLastQuizId.pending]: (state, action) => {
            state.status = "loading"; 
        }, 
        [getLastQuizId.fulfilled]: (state, action) => {
            state.status = "success"; 
            return action.payload;
        }, 
        [getLastQuizId.rejected]: (state, action) => {
            state.status = "failed"; 
        }
    }
})


export default getQuizIdSlice.reducer;