import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import AuthenticationService from '../service/AuthenticationService'

export const getUserFromDB = createAsyncThunk(
    'user/getUser',
    async(payload) => {
        const resp = await fetch(`http://localhost:8081/study_maths_smarter/user/find/${payload.username}`, {
            method:"GET",
            headers: { authorization: AuthenticationService.createBasicAuthToken(payload.username, payload.password) }
        });
        if (resp.ok){
            const data = await resp.json();
            return {data};
        }
    }
)

export const getUserSlice = createSlice({
    name: 'user',
    initialState: {
        id: 0,
        first_name:null,
        last_name:null,
        email:null,
        password:null,
        score:0,
        role: null
        },

    reducers: {
        updateUsername: (state,action) => {
            const newUser = {
                id: 0,
                first_name:null,
                last_name:null,
                email: action.payload.email,
                password: null,
                score: 0,
                role: null
            }
            return newUser;
        }
    },

    extraReducers: {
        [getUserFromDB.fulfilled]:(state, action) => {
            return action.payload.data;
        }
    }

})

export const {updateUsername} = getUserSlice.actions;
export default getUserSlice.reducer;