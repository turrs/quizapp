import { useAppSelector } from '@/states';
import React from 'react';

type SelectQuizProps = {
  setNumberQuestion: any;
  numberQuestion: number;
};

const SelectQuiz = ({ setNumberQuestion, numberQuestion }: SelectQuizProps) => {
  const quiz = useAppSelector((state) => state.quiz);
  return (
    <div>
      <div>Number Quiz</div>
      <div className="flex flex-wrap w-full">
        {quiz.map((item: any, index: number) => (
          <div
            onClick={() => setNumberQuestion(index)}
            key={index}
            className={`hover:cursor-pointer hover:bg-slate-200 rounded-md  m-1 w-[40px] flex justify-center items-center  h-[40px] border-solid border-2   ${
              item.answer === null || item.answer === undefined
                ? 'bg-white'
                : 'bg-blue'
            } `}
          >
            <p
              className={`  ${
                item.answer === null || item.answer === undefined
                  ? 'text-black'
                  : 'text-white'
              }`}
            >
              {index + 1}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectQuiz;
