import { TypeAction } from './action';
import { QuizHistoryActionTypes } from './type';

const initialStateQuiz: any = [];

function historyReducer(
  stateHistoryQuiz = initialStateQuiz,
  action: QuizHistoryActionTypes,
) {
  switch (action.type) {
    case TypeAction.SET_NEW_HISTORY_QUIZ:
      if (stateHistoryQuiz.length === 0) {
        return [action.payload.data];
      }
      return [stateHistoryQuiz, action.payload.data];
    case TypeAction.SET_DELETE_ALL_HISTORY:
      return initialStateQuiz;
    default:
      return stateHistoryQuiz;
  }
}

export { historyReducer };
