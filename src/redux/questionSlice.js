import { createSlice } from '@reduxjs/toolkit';

export const questionSlice = createSlice({
    name: 'questions',
    initialState: { 
            questionNum: 0 }, 

    reducers: {
        nextQuestion: (state, action) => {
            const question = {
                questionNum: state.questionNum + 1
            }
            return question;
        },
        resetQuestion: (state, action) => {
            const question = {
                questionNum: 0
            }
            return question;
        }
    },
})
export const { nextQuestion, resetQuestion } = questionSlice.actions;
export default questionSlice.reducer;