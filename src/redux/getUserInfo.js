import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//grabs user info data from API
export const getUserInfo = createAsyncThunk(
    'getUserInfo', 
    async () => {
        const response = await fetch("http://localhost:8080/study_maths_smarter/user");
        if(response.ok){
            const userInfo = await response.json();
            return {userInfo}
        }
    }
);