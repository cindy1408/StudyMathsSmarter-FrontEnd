import { configureStore } from '@reduxjs/toolkit';
import questionReducer from './questionSlice';
import startQuizReducer from './getQuizSlice';
import updateQuizReducer from './updateQuizSlice';
import questionsReducer from './getQuestionSlice';

export default configureStore({
	reducer: {
        questions: questionReducer,
        startQuiz: startQuizReducer,
        quizResult: updateQuizReducer,
        questionDb: questionsReducer
    },
});