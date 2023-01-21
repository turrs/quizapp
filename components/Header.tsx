import { useAppDispatch, useAppSelector } from '@/states';
import {
  getAccessToken,
  getUserLogin,
  saveUserLogin,
  setUserLogin,
} from '@/states/User/action';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import jwt from 'jwt-decode';
import { googleLogout } from '@react-oauth/google';
import { asyncGetQuiz, deleteAllQuiz } from '@/states/Quiz';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import LoadingBar from 'react-redux-loading-bar';
type HeaderProps = {
  setOpenQuiz: any;
};

const Header = ({ setOpenQuiz }: HeaderProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.users);
  const getUserLogin = () => {
    const token: any = getAccessToken();
    if (token === null) {
      router.push('/login');
    } else {
      const user: any = jwt(token);
      saveUserLogin(user);
      dispatch(setUserLogin(user));
    }
  };

  const handleLogout = () => {
    dispatch(deleteAllQuiz());
    googleLogout();
    localStorage.clear();
    router.push('/login');
  };
  const handleNewQuiz = async () => {
    dispatch(showLoading());
    dispatch(asyncGetQuiz() as any);
    setOpenQuiz(true);
    dispatch(hideLoading());
  };
  useEffect(() => {
    getUserLogin();
  }, []);
  return (
    <header aria-label="Page Header">
      <LoadingBar />
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Welcome Back, {user.name} !
            </h1>

            <p className="mt-1.5 text-sm text-gray-500">
              {"Let's Start Quiz "}
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <button
              className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
              type="button"
            >
              <span className="text-sm font-medium"> Recent Quiz </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1.5 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </button>

            <button
              onClick={handleNewQuiz}
              className="block rounded-lg bg-blue px-5 py-3 text-sm font-medium text-white transition hover:bg-green-700 focus:outline-none focus:ring"
              type="button"
            >
              New Quiz
            </button>
            <button
              className="block rounded-lg bg-red-800 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-700 focus:outline-none focus:ring"
              type="button"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
