import { ApiQuiz } from '@/utils/Api/Quiz';
import { AppDispatch } from '..';

const TypeAction = {
  SET_NEW_QUIZ: 'SET_NEW_QUIZ',
  SET_CHOICE: 'SET_CHOICE',
  SET_DELETE_CHOICE: 'SET_DELETE_CHOICE',
  SET_DELETE_ALL_QUIZ: 'SET_DELETE_ALL_QUIZ',
};

function setNewQuiz(data: any) {
  return {
    type: TypeAction.SET_NEW_QUIZ,
    payload: {
      data,
    },
  };
}
function deleteAllQuiz() {
  return {
    type: TypeAction.SET_DELETE_ALL_QUIZ,
  };
}

function setChoice(number: number, answer: string) {
  return {
    type: TypeAction.SET_CHOICE,
    payload: {
      number,
      answer,
    },
  };
}
function setDeleteChoice(number: number) {
  return {
    type: TypeAction.SET_CHOICE,
    payload: {
      number,
    },
  };
}

function getUserQuiz() {
  return JSON.parse(localStorage.getItem('quiz') as any);
}

function saveUserQuiz(data: string) {
  localStorage.setItem('quiz', JSON.stringify(data));
}
function deleteUserQuiz() {
  localStorage.removeItem('quiz');
}

function asyncGetQuiz() {
  return async (AppDispatch: any) => {
    try {
      const response = await ApiQuiz.getQuiz();
      console.log('quiz', response);
      saveUserQuiz(response);
      AppDispatch(setNewQuiz(response));
    } catch (error) {
      alert(error);
    }
  };
}

export {
  TypeAction,
  setNewQuiz,
  asyncGetQuiz,
  getUserQuiz,
  setChoice,
  setDeleteChoice,
  deleteAllQuiz,
  deleteUserQuiz,
};
