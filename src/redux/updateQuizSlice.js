import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const updateQuizResult = createAsyncThunk(
    'updateQuizResult', 
    async(payload) => {

        const response = await fetch(`http://localhost:8080/study_maths_smarter/quiz/${payload.quizId}`, {
            method: "PUT", 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(payload.quizResult)
        });
        console.log(response)
    }
)
export const updateQuizSlice = createSlice({
    name: 'quizResult', 
    initialState: {
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
    }, 
    reducers: {
        addTimeStamp: (state, action) => {
            let date = new Date(); 
            let fullDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
            let fullDateConverted = fullDate.toString()
            const newResult = {
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
            time_stamp: fullDateConverted, 
            user_id: null
            }
            return newResult; 
        }, 
        addG1Score: (state, action) => {
            const newResult = {
                question_s1_score: 1, 
                question_s2_score: null, 
                question_s3_score: null, 
                question_g1_score: null, 
                question_g2_score: null,
                question_g3_score: null,  
                question_t1_score: null, 
                question_t2_score: null, 
                question_t3_score: null, 
                result: 1, 
                time_stamp: state.time_stamp, 
                user_id: null
                }
                return newResult; 
        },
        addG2Score: (state, action) => {
            const newResult = {
                question_s1_score: state.question_s1_score, 
                question_s2_score: 1, 
                question_s3_score: null, 
                question_g1_score: null, 
                question_g2_score: null,
                question_g3_score: null,  
                question_t1_score: null, 
                question_t2_score: null, 
                question_t3_score: null, 
                result: state.result + 1, 
                time_stamp: state.time_stamp, 
                user_id: null
                }
                return newResult; 
        },
        addG3Score: (state, action) => {
            const newResult = {
                question_s1_score: state.question_s1_score, 
                question_s2_score: state.question_s2_score, 
                question_s3_score: 1, 
                question_g1_score: null, 
                question_g2_score: null,
                question_g3_score: null,  
                question_t1_score: null, 
                question_t2_score: null, 
                question_t3_score: null, 
                result: state.result + 1, 
                time_stamp: state.time_stamp, 
                user_id: null
                }
                return newResult; 
        },
        addS1Score: (state, action) => {
            const newResult = {
                question_s1_score: state.question_s1_score, 
                question_s2_score: state.question_s2_score, 
                question_s3_score: state.question_s3_score, 
                question_g1_score: 1, 
                question_g2_score: null,
                question_g3_score: null,  
                question_t1_score: null, 
                question_t2_score: null, 
                question_t3_score: null, 
                result: state.result + 1, 
                time_stamp: state.time_stamp, 
                user_id: null
                }
                return newResult; 
        },
        addS2Score: (state, action) => {
            const newResult = {
                question_s1_score: state.question_s1_score, 
                question_s2_score: state.question_s2_score, 
                question_s3_score: state.question_s3_score, 
                question_g1_score: state.question_g1_score, 
                question_g2_score: 1,
                question_g3_score: null,  
                question_t1_score: null, 
                question_t2_score: null, 
                question_t3_score: null, 
                result: state.result + 1, 
                time_stamp: state.time_stamp, 
                user_id: null
                }
                return newResult; 
        },
        addS3Score: (state, action) => {
            const newResult = {
                question_s1_score: state.question_s1_score, 
                question_s2_score: state.question_s2_score, 
                question_s3_score: state.question_s3_score, 
                question_g1_score: state.question_g1_score, 
                question_g2_score: state.question_g2_score,
                question_g3_score: 1,  
                question_t1_score: null, 
                question_t2_score: null, 
                question_t3_score: null, 
                result: state.result + 1, 
                time_stamp: state.time_stamp, 
                user_id: null
                }
                return newResult; 
        },
        addT1Score: (state, action) => {
            const newResult = {
                question_s1_score: state.question_s1_score, 
                question_s2_score: state.question_s2_score, 
                question_s3_score: state.question_s3_score, 
                question_g1_score: state.question_g1_score, 
                question_g2_score: state.question_g2_score,
                question_g3_score: state.question_g3_score,  
                question_t1_score: 1, 
                question_t2_score: null, 
                question_t3_score: null, 
                result: state.result + 1, 
                time_stamp: state.time_stamp, 
                user_id: null
                }
                return newResult; 
        },
        addT2Score: (state, action) => {
            const newResult = {
                question_s1_score: state.question_s1_score, 
                question_s2_score: state.question_s2_score, 
                question_s3_score: state.question_s3_score, 
                question_g1_score: state.question_g1_score, 
                question_g2_score: state.question_g2_score,
                question_g3_score: state.question_g3_score,  
                question_t1_score: state.question_t1_score, 
                question_t2_score: 1, 
                question_t3_score: null, 
                result: state.result + 1, 
                time_stamp: state.time_stamp, 
                user_id: null
                }
                return newResult; 
        },
        addT3Score: (state, action) => {
            const newResult = {
                question_s1_score: state.question_s1_score, 
                question_s2_score: state.question_s2_score, 
                question_s3_score: state.question_s3_score, 
                question_g1_score: state.question_g1_score, 
                question_g2_score: state.question_g2_score,
                question_g3_score: state.question_g3_score,  
                question_t1_score: state.question_t1_score, 
                question_t2_score: state.question_t2_score, 
                question_t3_score: 1, 
                result: state.result + 1, 
                time_stamp: state.time_stamp, 
                user_id: null
                }
                return newResult; 
        },
    }, 
    extraReducers: {
        [updateQuizResult.fulfilled]: (state, action) => {
            return action.payload.response;
        }
    }
})

export const { 
        addTimeStamp, 
        addG1Score, 
        addG2Score, 
        addG3Score, 
        addS1Score, 
        addS2Score,
        addS3Score, 
        addT1Score, 
        addT2Score,
        addT3Score 
        } = updateQuizSlice.actions;
export default updateQuizSlice.reducer;