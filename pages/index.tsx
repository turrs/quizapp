import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/states';
import Quiz from '@/components/Quiz';
import { asyncGetQuiz, getUserQuiz, setNewQuiz } from '@/states/Quiz';
import { initialStateQuiz } from '@/states/Quiz/reducer';
import LoadingBar from 'react-redux-loading-bar';
import Result from '@/components/Result';
import HistoryQuiz from '@/components/HistoryQuiz';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [openQuiz, setOpenQuiz] = useState<boolean>(false);
  const quiz = useAppSelector((state) => state.quiz);
  const stateHistory = useAppSelector((state) => state.historyQuiz);
  const [stateQuiz, setStateQuiz] = useState([]);
  const [result, setResult] = useState<boolean>(false);
  const [hisory, setHistory] = useState<boolean>(false);
  const [historyQuiz, setHistoryQuiz] = useState([]);
  const dispatch = useAppDispatch();
  const handleResume = () => {
    setOpenQuiz(true);
  };
  const addQuizToState = async () => {
    const quiz = getUserQuiz();
    dispatch(setNewQuiz(quiz));
  };
  const handleNewQuiz = async () => {
    dispatch(asyncGetQuiz() as any);
    setOpenQuiz(true);
  };
  useEffect(() => {
    setHistoryQuiz(stateHistory);
  }, [stateHistory]);
  useEffect(() => {
    const handleTabClose = (event: any) => {
      event.preventDefault();

      return (event.returnValue = 'Are you sure you want to exit?');
    };

    window.addEventListener('beforeunload', handleTabClose);
    addQuizToState();
    return () => {
      window.removeEventListener('beforeunload', handleTabClose);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header setHistory={setHistory} setOpenQuiz={setOpenQuiz} />
      <LoadingBar />
      <div className="flex flex-col justify-center items-center ">
        {hisory && (
          <HistoryQuiz historyQuiz={historyQuiz} setHistory={setHistory} />
        )}
        {quiz !== initialStateQuiz && openQuiz === false ? (
          <div
            onClick={handleResume}
            className="bg-blue p-2 hover:opacity-75 rounded-xl hover:cursor-pointer"
          >
            <p className="text-white">Resume Quiz</p>
          </div>
        ) : (
          <>
            {openQuiz === false && (
              <div>
                <button
                  onClick={handleNewQuiz}
                  className="block rounded-lg bg-blue px-5 py-3 text-sm font-medium text-white transition hover:bg-green-700 focus:outline-none focus:ring"
                  type="button"
                >
                  New Quiz
                </button>
              </div>
            )}
          </>
        )}
      </div>
      {openQuiz && (
        <Quiz
          result={result}
          setResult={setResult}
          setStateQuiz={setStateQuiz}
          setOpenQuiz={setOpenQuiz}
        />
      )}
      {result && (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  ">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setResult(false)}
            />
            <div className="flex   -px-2  justify-center py-8">
              <div className="relative w-full max-w-lg p-6 mx-auto  bg-white rounded-md shadow-lg">
                <div className="mt-3 sm:flex w-full">
                  <div className="mt-2 text-center sm:ml-1 sm:text-left w-full">
                    <div className="flex flex-col w-full h-[40px]">
                      <Result answer={stateQuiz} />
                    </div>
                    <div className="flex justify-end">
                      <div
                        onClick={() => setResult(!result)}
                        className="bg-red-500 hover:cursor-pointer hover:opacity-75 p-2 rounded-md"
                      >
                        <p className="text-white">Close</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
