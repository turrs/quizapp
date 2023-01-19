import { TypeAction } from '.';
import { QuizActionTypes } from './type';

const initialState: any = [
  {
    category: '',
    type: '',
    difficulty: '',
    question: '',
    correct_answer: '',
    incorrect_answers: [' ', ' ', ' '],
  },
];

function quizReducer(quizState = initialState, action: QuizActionTypes) {
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
    default:
      return quizState;
  }
}

export { quizReducer };
