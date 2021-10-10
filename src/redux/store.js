import { configureStore } from '@reduxjs/toolkit';
import questionReducer from './questionSlice';
import getQuizIdReducer from './getQuizSlice';

export default configureStore({
	reducer: {
        questions: questionReducer,
        quizResult: getQuizIdReducer,
        quizId: getQuizIdReducer
    },
});