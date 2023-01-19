import { ApiQuiz } from '@/utils/Api/Quiz';
import { AppDispatch } from '..';

const TypeAction = {
  SET_NEW_QUIZ: 'SET_NEW_QUIZ',
  SET_CHOICE: 'SET_CHOICE',
};

function setNewQuiz(data: any) {
  return {
    type: TypeAction.SET_NEW_QUIZ,
    payload: {
      data,
    },
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

function getUserQuiz() {
  return JSON.parse(localStorage.getItem('quiz'));
}

function saveUserQuiz(data: string) {
  localStorage.setItem('quiz', JSON.stringify(data));
}

function asyncGetQuiz() {
  return async (AppDispatch: any) => {
    try {
      const response = await ApiQuiz.getQuiz();
      saveUserQuiz(response);
      AppDispatch(setNewQuiz(response));
    } catch (error) {
      console.log(error);
    }
  };
}

export { TypeAction, setNewQuiz, asyncGetQuiz, getUserQuiz, setChoice };
