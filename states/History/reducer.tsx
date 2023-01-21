import { TypeAction } from './action';
import { QuizHistoryActionTypes } from './type';

const initialStateQuiz = {};

function historyReducer(
  stateHistoryQuiz = initialStateQuiz,
  action: QuizHistoryActionTypes,
) {
  switch (action.type) {
    case TypeAction.SET_NEW_HISTORY_QUIZ:
      return [stateHistoryQuiz].concat(action.payload.data);
    default:
      return stateHistoryQuiz;
  }
}

export { historyReducer };
