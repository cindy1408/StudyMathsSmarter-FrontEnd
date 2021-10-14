import { configureStore } from '@reduxjs/toolkit';
import questionReducer from './questionSlice';
import startQuizReducer from './startQuizSlice';
import updateQuizReducer from './updateQuizSlice';
import getUserSlice from './getUserSlice';
import questionsReducer from './getQuestionSlice';
import quizReducer from './getQuizSlice';

export default configureStore({
	reducer: {
        questions: questionReducer,
        quizResult: startQuizReducer,
        quizResult: updateQuizReducer,
        user: getUserSlice,
        questionDb: questionsReducer, 
        quizId: quizReducer
    },
});