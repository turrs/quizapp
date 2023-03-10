import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
  useSelector,
} from 'react-redux';
import thunk from 'redux-thunk';
import { quizReducer } from './Quiz/reducer';
import { usersLoginReducer } from './User/reducer';
import { loadingBarReducer } from 'react-redux-loading-bar';
import { historyReducer } from './History/reducer';

const checkTokenExpirationMiddleware =
  (store: any) => (next: any) => (action: any) => {
    const token: any = localStorage.getItem('accessToken');
    if (jwtDecode<any>(token).exp < Date.now() / 1000) {
      next(action);
      localStorage.clear();
    }
    next(action);
  };

const store: any = configureStore({
  reducer: {
    users: usersLoginReducer,
    quiz: quizReducer,
    loadingBar: loadingBarReducer,
    historyQuiz: historyReducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
