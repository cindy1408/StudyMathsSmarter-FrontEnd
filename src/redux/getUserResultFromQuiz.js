import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUserResult = createAsyncThunk(
    'getUserResult', 
    async () =>{
        const response = await fetch("https://localhost:8080/study_maths_smarter");
        if(response.ok){
            const data = await response.json();
            const userResult = data[data.length - 1]
            return {userResult}
        }
    }
)