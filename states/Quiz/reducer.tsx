import { TypeAction } from '.';
import store from '..';
import { QuizActionTypes } from './type';

export const initialStateQuiz: any = [
  {
    category: '',
    type: '',
    difficulty: '',
    question: '',
    correct_answer: '',
    incorrect_answers: [' ', ' ', ' '],
  },
];

function quizReducer(quizState = initialStateQuiz, action: QuizActionTypes) {
  switch (action.type) {
    case TypeAction.SET_NEW_QUIZ:
      if (action.payload.data === null) {
        return quizState;
      }
      return action.payload.data;
    case TypeAction.SET_CHOICE:
      return Object.values({
        ...quizState,
        [action.payload.number]: (quizState[action.payload.number] = {
          ...quizState[action.payload.number],
          answer: action.payload.answer,
        }),
      });
    case TypeAction.SET_DELETE_CHOICE:
      return Object.values({
        ...quizState,
        [action.payload.number]: (quizState[action.payload.number] = {
          ...quizState[action.payload.number],
          answer: null,
        }),
      });
    case TypeAction.SET_DELETE_ALL_QUIZ:

    default:
      return quizState;
  }
}

export { quizReducer };
