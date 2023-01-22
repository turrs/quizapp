import { useAppSelector } from '@/states';
import React from 'react';
import Result from './Result';

type HistoryQuizProps = {
  setHistory: any;
  historyQuiz: any;
};

const HistoryQuiz = ({ setHistory, historyQuiz }: HistoryQuizProps) => {
  console.log(90909, historyQuiz);
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  ">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={() => setHistory(false)}
        />
        <div className="flex   -px-2  justify-center py-8">
          <div className="relative w-full max-w-lg p-6 mx-auto  bg-white rounded-md shadow-lg">
            <div className="mt-3 sm:flex w-full">
              <div className="mt-2 text-center sm:ml-1 sm:text-left w-full">
                <div className="flex flex-col w-full">
                  {historyQuiz.map((item: any, index: number) => (
                    <div className="py-2">
                      <div>Quiz {index}</div>
                      <Result answer={item} />
                    </div>
                  ))}
                </div>
                <div className="flex justify-end">
                  <div
                    onClick={() => setHistory(false)}
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
  );
};

export default HistoryQuiz;
