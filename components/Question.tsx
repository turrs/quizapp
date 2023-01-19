import { useAppDispatch } from '@/states';
import { setChoice, setDeleteChoice } from '@/states/Quiz';
import React from 'react';

type QuestionProps = {
  data: any;
  numberQuiz: number;
  setNumberQuestion: any;
  maxQuiz: number;
};

const Question = ({
  data,
  numberQuiz,
  setNumberQuestion,
  maxQuiz,
}: QuestionProps) => {
  const choice = ['A', 'B', 'C', 'D'];
  const dispatch = useAppDispatch();
  const handleChoice = (number: number, answer: string, maxQuiz: number) => {
    dispatch(setChoice(number, answer));
    if (number !== maxQuiz - 1) {
      setNumberQuestion(number + 1);
    }
  };
  const handleDeleteChoice = (number: any) => {
    dispatch(setDeleteChoice(number));
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <div className="flex w-full justify-end">
          <div className="rounded-md m-1 w-[40px] flex justify-center items-center bg-green-400  h-[40px] border-solid border-2">
            <p className="text-white">{numberQuiz + 1}</p>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: data.question }} />
      </div>
      <div className="py-6 px-2">
        {data.incorrect_answers.map((item: any, index: number) => (
          <div
            className={`flex py-4 hover:bg-slate-200 rounded-md my-2 ${
              item === data.answer && 'bg-blue'
            } hover:cursor-pointer`}
            key={index}
            onClick={() => handleChoice(numberQuiz, item, maxQuiz)}
          >
            <div className="pr-6 px-2 ">{choice[index]}.</div>
            <div>{item}</div>
          </div>
        ))}
        <div
          className="py-4 hover:bg-red-200 rounded-md px-2"
          onClick={() => data.answer !== null && handleDeleteChoice(numberQuiz)}
        >
          Delete Answer
        </div>
        <div className="py-4 flex justify-end px-2">
          <div className="bg-green-500 hover:cursor-pointer hover:opacity-75 p-2 rounded-md">
            <p className="text-white">Finish Quiz</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
