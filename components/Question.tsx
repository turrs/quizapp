import { useAppDispatch, useAppSelector } from '@/states';
import { setNewHistoryQuiz } from '@/states/History/action';
import {
  deleteAllQuiz,
  deleteUserQuiz,
  setChoice,
  setDeleteChoice,
} from '@/states/Quiz';
import React, { useState } from 'react';

type QuestionProps = {
  data: any;
  numberQuiz: number;
  setNumberQuestion: any;
  maxQuiz: number;
  setOpenQuiz: any;
};

const Question = ({
  data,
  numberQuiz,
  setNumberQuestion,
  maxQuiz,
  setOpenQuiz,
}: QuestionProps) => {
  const choice = ['A', 'B', 'C', 'D'];
  const dispatch = useAppDispatch();
  const handleChoice = (number: number, answer: string, maxQuiz: number) => {
    dispatch(setChoice(number, answer));
    if (number !== maxQuiz - 1) {
      setNumberQuestion(number + 1);
    }
  };
  const [showModal, setShowModal] = useState<any | null>(false);
  const stateQuiz = useAppSelector((state) => state.quiz);
  const handleSubmitQuiz = (data: any) => {
    console.log(data);
    dispatch(setNewHistoryQuiz(data));
    dispatch(deleteAllQuiz());
    deleteUserQuiz();
    setOpenQuiz(false);
    setShowModal(false);
  };

  const handleDeleteChoice = (number: any) => {
    dispatch(setDeleteChoice(number));
  };
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col">
        <div className="flex w-full justify-end">
          <div className="rounded-md m-1 w-[40px] flex justify-center items-center bg-green-400  h-[40px] border-solid border-2">
            <p className="text-white">{numberQuiz + 1}</p>
          </div>
        </div>
        <div
          className="px-4 "
          dangerouslySetInnerHTML={{ __html: data?.question }}
        />
      </div>
      <div className="py-6 px-2">
        {data?.incorrect_answers.map((item: any, index: number) => (
          <div
            className={`flex py-4 hover:bg-slate-200 rounded-md my-2 ${
              item === data.answer && 'bg-blue'
            } hover:cursor-pointer`}
            key={index}
            onClick={() => handleChoice(numberQuiz, item, maxQuiz)}
          >
            <div className="pr-6 px-2 ">{choice[index]}.</div>
            <div dangerouslySetInnerHTML={{ __html: item }} />
          </div>
        ))}
        <div
          className="py-4 hover:bg-red-200 rounded-md px-2"
          onClick={() => data.answer !== null && handleDeleteChoice(numberQuiz)}
        >
          Delete Answer
        </div>
        <div className="py-4 flex justify-end px-2">
          <div
            onClick={() => setShowModal(!showModal)}
            className="bg-green-500 hover:cursor-pointer hover:opacity-75 p-2 rounded-md"
          >
            <p className="text-white">Finish Quiz</p>
          </div>
        </div>
        {showModal ? (
          <>
            <div className="fixed inset-0 z-10 overflow-y-auto shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  ">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setShowModal(false)}
              />
              <div className="flex   -px-2  justify-center py-8">
                <div className="relative w-full max-w-lg p-6 mx-auto  bg-white rounded-md shadow-lg">
                  <div className="mt-3 sm:flex w-full">
                    <div className="mt-2 text-center sm:ml-1 sm:text-left w-full">
                      <div className="flex flex-col w-full h-[40px]">
                        Are you sure you want to complete the test?
                      </div>
                      <div className="flex justify-between">
                        <div
                          onClick={() => setShowModal(!showModal)}
                          className="bg-red-500 hover:cursor-pointer hover:opacity-75 p-2 rounded-md"
                        >
                          <p className="text-white">Cancel</p>
                        </div>
                        <div
                          onClick={() => handleSubmitQuiz(stateQuiz)}
                          className="bg-green-500 hover:cursor-pointer hover:opacity-75 p-2 rounded-md"
                        >
                          <p className="text-white">Submit</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Question;
